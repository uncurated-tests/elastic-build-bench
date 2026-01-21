'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12477<T> = T extends (infer U)[]
  ? DeepReadonlyArray12477<U>
  : T extends object
  ? DeepReadonlyObject12477<T>
  : T;

interface DeepReadonlyArray12477<T> extends ReadonlyArray<DeepReadonly12477<T>> {}

type DeepReadonlyObject12477<T> = {
  readonly [P in keyof T]: DeepReadonly12477<T[P]>;
};

type UnionToIntersection12477<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12477<T> = UnionToIntersection12477<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12477<T extends unknown[], V> = [...T, V];

type TuplifyUnion12477<T, L = LastOf12477<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12477<TuplifyUnion12477<Exclude<T, L>>, L>;

type DeepPartial12477<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12477<T[P]> }
  : T;

type Paths12477<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12477<K, Paths12477<T[K], Prev12477[D]>> : never }[keyof T]
  : never;

type Prev12477 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12477<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12477 {
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

type ConfigPaths12477 = Paths12477<NestedConfig12477>;

interface HeavyProps12477 {
  config: DeepPartial12477<NestedConfig12477>;
  path?: ConfigPaths12477;
}

const HeavyComponent12477 = memo(function HeavyComponent12477({ config }: HeavyProps12477) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12477) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12477 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12477: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12477.displayName = 'HeavyComponent12477';
export default HeavyComponent12477;
