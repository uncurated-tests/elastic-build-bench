'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10188<T> = T extends (infer U)[]
  ? DeepReadonlyArray10188<U>
  : T extends object
  ? DeepReadonlyObject10188<T>
  : T;

interface DeepReadonlyArray10188<T> extends ReadonlyArray<DeepReadonly10188<T>> {}

type DeepReadonlyObject10188<T> = {
  readonly [P in keyof T]: DeepReadonly10188<T[P]>;
};

type UnionToIntersection10188<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10188<T> = UnionToIntersection10188<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10188<T extends unknown[], V> = [...T, V];

type TuplifyUnion10188<T, L = LastOf10188<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10188<TuplifyUnion10188<Exclude<T, L>>, L>;

type DeepPartial10188<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10188<T[P]> }
  : T;

type Paths10188<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10188<K, Paths10188<T[K], Prev10188[D]>> : never }[keyof T]
  : never;

type Prev10188 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10188<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10188 {
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

type ConfigPaths10188 = Paths10188<NestedConfig10188>;

interface HeavyProps10188 {
  config: DeepPartial10188<NestedConfig10188>;
  path?: ConfigPaths10188;
}

const HeavyComponent10188 = memo(function HeavyComponent10188({ config }: HeavyProps10188) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10188) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10188 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10188: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10188.displayName = 'HeavyComponent10188';
export default HeavyComponent10188;
