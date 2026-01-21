'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7707<T> = T extends (infer U)[]
  ? DeepReadonlyArray7707<U>
  : T extends object
  ? DeepReadonlyObject7707<T>
  : T;

interface DeepReadonlyArray7707<T> extends ReadonlyArray<DeepReadonly7707<T>> {}

type DeepReadonlyObject7707<T> = {
  readonly [P in keyof T]: DeepReadonly7707<T[P]>;
};

type UnionToIntersection7707<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7707<T> = UnionToIntersection7707<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7707<T extends unknown[], V> = [...T, V];

type TuplifyUnion7707<T, L = LastOf7707<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7707<TuplifyUnion7707<Exclude<T, L>>, L>;

type DeepPartial7707<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7707<T[P]> }
  : T;

type Paths7707<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7707<K, Paths7707<T[K], Prev7707[D]>> : never }[keyof T]
  : never;

type Prev7707 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7707<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7707 {
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

type ConfigPaths7707 = Paths7707<NestedConfig7707>;

interface HeavyProps7707 {
  config: DeepPartial7707<NestedConfig7707>;
  path?: ConfigPaths7707;
}

const HeavyComponent7707 = memo(function HeavyComponent7707({ config }: HeavyProps7707) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7707) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7707 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7707: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7707.displayName = 'HeavyComponent7707';
export default HeavyComponent7707;
