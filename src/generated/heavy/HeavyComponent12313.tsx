'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12313<T> = T extends (infer U)[]
  ? DeepReadonlyArray12313<U>
  : T extends object
  ? DeepReadonlyObject12313<T>
  : T;

interface DeepReadonlyArray12313<T> extends ReadonlyArray<DeepReadonly12313<T>> {}

type DeepReadonlyObject12313<T> = {
  readonly [P in keyof T]: DeepReadonly12313<T[P]>;
};

type UnionToIntersection12313<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12313<T> = UnionToIntersection12313<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12313<T extends unknown[], V> = [...T, V];

type TuplifyUnion12313<T, L = LastOf12313<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12313<TuplifyUnion12313<Exclude<T, L>>, L>;

type DeepPartial12313<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12313<T[P]> }
  : T;

type Paths12313<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12313<K, Paths12313<T[K], Prev12313[D]>> : never }[keyof T]
  : never;

type Prev12313 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12313<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12313 {
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

type ConfigPaths12313 = Paths12313<NestedConfig12313>;

interface HeavyProps12313 {
  config: DeepPartial12313<NestedConfig12313>;
  path?: ConfigPaths12313;
}

const HeavyComponent12313 = memo(function HeavyComponent12313({ config }: HeavyProps12313) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12313) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12313 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12313: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12313.displayName = 'HeavyComponent12313';
export default HeavyComponent12313;
