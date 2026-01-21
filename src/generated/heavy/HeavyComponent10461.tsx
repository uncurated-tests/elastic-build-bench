'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10461<T> = T extends (infer U)[]
  ? DeepReadonlyArray10461<U>
  : T extends object
  ? DeepReadonlyObject10461<T>
  : T;

interface DeepReadonlyArray10461<T> extends ReadonlyArray<DeepReadonly10461<T>> {}

type DeepReadonlyObject10461<T> = {
  readonly [P in keyof T]: DeepReadonly10461<T[P]>;
};

type UnionToIntersection10461<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10461<T> = UnionToIntersection10461<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10461<T extends unknown[], V> = [...T, V];

type TuplifyUnion10461<T, L = LastOf10461<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10461<TuplifyUnion10461<Exclude<T, L>>, L>;

type DeepPartial10461<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10461<T[P]> }
  : T;

type Paths10461<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10461<K, Paths10461<T[K], Prev10461[D]>> : never }[keyof T]
  : never;

type Prev10461 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10461<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10461 {
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

type ConfigPaths10461 = Paths10461<NestedConfig10461>;

interface HeavyProps10461 {
  config: DeepPartial10461<NestedConfig10461>;
  path?: ConfigPaths10461;
}

const HeavyComponent10461 = memo(function HeavyComponent10461({ config }: HeavyProps10461) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10461) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10461 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10461: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10461.displayName = 'HeavyComponent10461';
export default HeavyComponent10461;
