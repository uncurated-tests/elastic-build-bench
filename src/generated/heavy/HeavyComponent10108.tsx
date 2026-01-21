'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10108<T> = T extends (infer U)[]
  ? DeepReadonlyArray10108<U>
  : T extends object
  ? DeepReadonlyObject10108<T>
  : T;

interface DeepReadonlyArray10108<T> extends ReadonlyArray<DeepReadonly10108<T>> {}

type DeepReadonlyObject10108<T> = {
  readonly [P in keyof T]: DeepReadonly10108<T[P]>;
};

type UnionToIntersection10108<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10108<T> = UnionToIntersection10108<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10108<T extends unknown[], V> = [...T, V];

type TuplifyUnion10108<T, L = LastOf10108<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10108<TuplifyUnion10108<Exclude<T, L>>, L>;

type DeepPartial10108<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10108<T[P]> }
  : T;

type Paths10108<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10108<K, Paths10108<T[K], Prev10108[D]>> : never }[keyof T]
  : never;

type Prev10108 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10108<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10108 {
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

type ConfigPaths10108 = Paths10108<NestedConfig10108>;

interface HeavyProps10108 {
  config: DeepPartial10108<NestedConfig10108>;
  path?: ConfigPaths10108;
}

const HeavyComponent10108 = memo(function HeavyComponent10108({ config }: HeavyProps10108) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10108) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10108 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10108: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10108.displayName = 'HeavyComponent10108';
export default HeavyComponent10108;
