'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10860<T> = T extends (infer U)[]
  ? DeepReadonlyArray10860<U>
  : T extends object
  ? DeepReadonlyObject10860<T>
  : T;

interface DeepReadonlyArray10860<T> extends ReadonlyArray<DeepReadonly10860<T>> {}

type DeepReadonlyObject10860<T> = {
  readonly [P in keyof T]: DeepReadonly10860<T[P]>;
};

type UnionToIntersection10860<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10860<T> = UnionToIntersection10860<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10860<T extends unknown[], V> = [...T, V];

type TuplifyUnion10860<T, L = LastOf10860<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10860<TuplifyUnion10860<Exclude<T, L>>, L>;

type DeepPartial10860<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10860<T[P]> }
  : T;

type Paths10860<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10860<K, Paths10860<T[K], Prev10860[D]>> : never }[keyof T]
  : never;

type Prev10860 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10860<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10860 {
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

type ConfigPaths10860 = Paths10860<NestedConfig10860>;

interface HeavyProps10860 {
  config: DeepPartial10860<NestedConfig10860>;
  path?: ConfigPaths10860;
}

const HeavyComponent10860 = memo(function HeavyComponent10860({ config }: HeavyProps10860) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10860) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10860 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10860: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10860.displayName = 'HeavyComponent10860';
export default HeavyComponent10860;
