'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10782<T> = T extends (infer U)[]
  ? DeepReadonlyArray10782<U>
  : T extends object
  ? DeepReadonlyObject10782<T>
  : T;

interface DeepReadonlyArray10782<T> extends ReadonlyArray<DeepReadonly10782<T>> {}

type DeepReadonlyObject10782<T> = {
  readonly [P in keyof T]: DeepReadonly10782<T[P]>;
};

type UnionToIntersection10782<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10782<T> = UnionToIntersection10782<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10782<T extends unknown[], V> = [...T, V];

type TuplifyUnion10782<T, L = LastOf10782<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10782<TuplifyUnion10782<Exclude<T, L>>, L>;

type DeepPartial10782<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10782<T[P]> }
  : T;

type Paths10782<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10782<K, Paths10782<T[K], Prev10782[D]>> : never }[keyof T]
  : never;

type Prev10782 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10782<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10782 {
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

type ConfigPaths10782 = Paths10782<NestedConfig10782>;

interface HeavyProps10782 {
  config: DeepPartial10782<NestedConfig10782>;
  path?: ConfigPaths10782;
}

const HeavyComponent10782 = memo(function HeavyComponent10782({ config }: HeavyProps10782) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10782) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10782 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10782: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10782.displayName = 'HeavyComponent10782';
export default HeavyComponent10782;
