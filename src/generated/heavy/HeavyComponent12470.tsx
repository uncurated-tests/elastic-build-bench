'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12470<T> = T extends (infer U)[]
  ? DeepReadonlyArray12470<U>
  : T extends object
  ? DeepReadonlyObject12470<T>
  : T;

interface DeepReadonlyArray12470<T> extends ReadonlyArray<DeepReadonly12470<T>> {}

type DeepReadonlyObject12470<T> = {
  readonly [P in keyof T]: DeepReadonly12470<T[P]>;
};

type UnionToIntersection12470<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12470<T> = UnionToIntersection12470<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12470<T extends unknown[], V> = [...T, V];

type TuplifyUnion12470<T, L = LastOf12470<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12470<TuplifyUnion12470<Exclude<T, L>>, L>;

type DeepPartial12470<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12470<T[P]> }
  : T;

type Paths12470<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12470<K, Paths12470<T[K], Prev12470[D]>> : never }[keyof T]
  : never;

type Prev12470 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12470<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12470 {
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

type ConfigPaths12470 = Paths12470<NestedConfig12470>;

interface HeavyProps12470 {
  config: DeepPartial12470<NestedConfig12470>;
  path?: ConfigPaths12470;
}

const HeavyComponent12470 = memo(function HeavyComponent12470({ config }: HeavyProps12470) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12470) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12470 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12470: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12470.displayName = 'HeavyComponent12470';
export default HeavyComponent12470;
