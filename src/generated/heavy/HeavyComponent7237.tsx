'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7237<T> = T extends (infer U)[]
  ? DeepReadonlyArray7237<U>
  : T extends object
  ? DeepReadonlyObject7237<T>
  : T;

interface DeepReadonlyArray7237<T> extends ReadonlyArray<DeepReadonly7237<T>> {}

type DeepReadonlyObject7237<T> = {
  readonly [P in keyof T]: DeepReadonly7237<T[P]>;
};

type UnionToIntersection7237<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7237<T> = UnionToIntersection7237<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7237<T extends unknown[], V> = [...T, V];

type TuplifyUnion7237<T, L = LastOf7237<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7237<TuplifyUnion7237<Exclude<T, L>>, L>;

type DeepPartial7237<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7237<T[P]> }
  : T;

type Paths7237<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7237<K, Paths7237<T[K], Prev7237[D]>> : never }[keyof T]
  : never;

type Prev7237 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7237<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7237 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths7237 = Paths7237<NestedConfig7237>;

interface HeavyProps7237 {
  config: DeepPartial7237<NestedConfig7237>;
  path?: ConfigPaths7237;
}

const HeavyComponent7237 = memo(function HeavyComponent7237({ config }: HeavyProps7237) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7237) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7237 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7237: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7237.displayName = 'HeavyComponent7237';
export default HeavyComponent7237;
