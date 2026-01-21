'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10419<T> = T extends (infer U)[]
  ? DeepReadonlyArray10419<U>
  : T extends object
  ? DeepReadonlyObject10419<T>
  : T;

interface DeepReadonlyArray10419<T> extends ReadonlyArray<DeepReadonly10419<T>> {}

type DeepReadonlyObject10419<T> = {
  readonly [P in keyof T]: DeepReadonly10419<T[P]>;
};

type UnionToIntersection10419<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10419<T> = UnionToIntersection10419<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10419<T extends unknown[], V> = [...T, V];

type TuplifyUnion10419<T, L = LastOf10419<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10419<TuplifyUnion10419<Exclude<T, L>>, L>;

type DeepPartial10419<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10419<T[P]> }
  : T;

type Paths10419<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10419<K, Paths10419<T[K], Prev10419[D]>> : never }[keyof T]
  : never;

type Prev10419 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10419<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10419 {
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

type ConfigPaths10419 = Paths10419<NestedConfig10419>;

interface HeavyProps10419 {
  config: DeepPartial10419<NestedConfig10419>;
  path?: ConfigPaths10419;
}

const HeavyComponent10419 = memo(function HeavyComponent10419({ config }: HeavyProps10419) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10419) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10419 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10419: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10419.displayName = 'HeavyComponent10419';
export default HeavyComponent10419;
