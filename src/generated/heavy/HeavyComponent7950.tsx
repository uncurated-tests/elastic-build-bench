'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7950<T> = T extends (infer U)[]
  ? DeepReadonlyArray7950<U>
  : T extends object
  ? DeepReadonlyObject7950<T>
  : T;

interface DeepReadonlyArray7950<T> extends ReadonlyArray<DeepReadonly7950<T>> {}

type DeepReadonlyObject7950<T> = {
  readonly [P in keyof T]: DeepReadonly7950<T[P]>;
};

type UnionToIntersection7950<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7950<T> = UnionToIntersection7950<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7950<T extends unknown[], V> = [...T, V];

type TuplifyUnion7950<T, L = LastOf7950<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7950<TuplifyUnion7950<Exclude<T, L>>, L>;

type DeepPartial7950<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7950<T[P]> }
  : T;

type Paths7950<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7950<K, Paths7950<T[K], Prev7950[D]>> : never }[keyof T]
  : never;

type Prev7950 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7950<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7950 {
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

type ConfigPaths7950 = Paths7950<NestedConfig7950>;

interface HeavyProps7950 {
  config: DeepPartial7950<NestedConfig7950>;
  path?: ConfigPaths7950;
}

const HeavyComponent7950 = memo(function HeavyComponent7950({ config }: HeavyProps7950) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7950) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7950 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7950: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7950.displayName = 'HeavyComponent7950';
export default HeavyComponent7950;
