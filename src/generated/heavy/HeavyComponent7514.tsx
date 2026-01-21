'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7514<T> = T extends (infer U)[]
  ? DeepReadonlyArray7514<U>
  : T extends object
  ? DeepReadonlyObject7514<T>
  : T;

interface DeepReadonlyArray7514<T> extends ReadonlyArray<DeepReadonly7514<T>> {}

type DeepReadonlyObject7514<T> = {
  readonly [P in keyof T]: DeepReadonly7514<T[P]>;
};

type UnionToIntersection7514<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7514<T> = UnionToIntersection7514<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7514<T extends unknown[], V> = [...T, V];

type TuplifyUnion7514<T, L = LastOf7514<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7514<TuplifyUnion7514<Exclude<T, L>>, L>;

type DeepPartial7514<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7514<T[P]> }
  : T;

type Paths7514<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7514<K, Paths7514<T[K], Prev7514[D]>> : never }[keyof T]
  : never;

type Prev7514 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7514<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7514 {
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

type ConfigPaths7514 = Paths7514<NestedConfig7514>;

interface HeavyProps7514 {
  config: DeepPartial7514<NestedConfig7514>;
  path?: ConfigPaths7514;
}

const HeavyComponent7514 = memo(function HeavyComponent7514({ config }: HeavyProps7514) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7514) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7514 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7514: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7514.displayName = 'HeavyComponent7514';
export default HeavyComponent7514;
