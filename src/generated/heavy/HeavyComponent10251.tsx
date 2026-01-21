'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10251<T> = T extends (infer U)[]
  ? DeepReadonlyArray10251<U>
  : T extends object
  ? DeepReadonlyObject10251<T>
  : T;

interface DeepReadonlyArray10251<T> extends ReadonlyArray<DeepReadonly10251<T>> {}

type DeepReadonlyObject10251<T> = {
  readonly [P in keyof T]: DeepReadonly10251<T[P]>;
};

type UnionToIntersection10251<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10251<T> = UnionToIntersection10251<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10251<T extends unknown[], V> = [...T, V];

type TuplifyUnion10251<T, L = LastOf10251<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10251<TuplifyUnion10251<Exclude<T, L>>, L>;

type DeepPartial10251<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10251<T[P]> }
  : T;

type Paths10251<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10251<K, Paths10251<T[K], Prev10251[D]>> : never }[keyof T]
  : never;

type Prev10251 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10251<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10251 {
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

type ConfigPaths10251 = Paths10251<NestedConfig10251>;

interface HeavyProps10251 {
  config: DeepPartial10251<NestedConfig10251>;
  path?: ConfigPaths10251;
}

const HeavyComponent10251 = memo(function HeavyComponent10251({ config }: HeavyProps10251) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10251) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10251 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10251: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10251.displayName = 'HeavyComponent10251';
export default HeavyComponent10251;
