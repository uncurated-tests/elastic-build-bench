'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10028<T> = T extends (infer U)[]
  ? DeepReadonlyArray10028<U>
  : T extends object
  ? DeepReadonlyObject10028<T>
  : T;

interface DeepReadonlyArray10028<T> extends ReadonlyArray<DeepReadonly10028<T>> {}

type DeepReadonlyObject10028<T> = {
  readonly [P in keyof T]: DeepReadonly10028<T[P]>;
};

type UnionToIntersection10028<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10028<T> = UnionToIntersection10028<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10028<T extends unknown[], V> = [...T, V];

type TuplifyUnion10028<T, L = LastOf10028<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10028<TuplifyUnion10028<Exclude<T, L>>, L>;

type DeepPartial10028<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10028<T[P]> }
  : T;

type Paths10028<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10028<K, Paths10028<T[K], Prev10028[D]>> : never }[keyof T]
  : never;

type Prev10028 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10028<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10028 {
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

type ConfigPaths10028 = Paths10028<NestedConfig10028>;

interface HeavyProps10028 {
  config: DeepPartial10028<NestedConfig10028>;
  path?: ConfigPaths10028;
}

const HeavyComponent10028 = memo(function HeavyComponent10028({ config }: HeavyProps10028) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10028) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10028 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10028: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10028.displayName = 'HeavyComponent10028';
export default HeavyComponent10028;
