'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10863<T> = T extends (infer U)[]
  ? DeepReadonlyArray10863<U>
  : T extends object
  ? DeepReadonlyObject10863<T>
  : T;

interface DeepReadonlyArray10863<T> extends ReadonlyArray<DeepReadonly10863<T>> {}

type DeepReadonlyObject10863<T> = {
  readonly [P in keyof T]: DeepReadonly10863<T[P]>;
};

type UnionToIntersection10863<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10863<T> = UnionToIntersection10863<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10863<T extends unknown[], V> = [...T, V];

type TuplifyUnion10863<T, L = LastOf10863<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10863<TuplifyUnion10863<Exclude<T, L>>, L>;

type DeepPartial10863<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10863<T[P]> }
  : T;

type Paths10863<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10863<K, Paths10863<T[K], Prev10863[D]>> : never }[keyof T]
  : never;

type Prev10863 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10863<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10863 {
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

type ConfigPaths10863 = Paths10863<NestedConfig10863>;

interface HeavyProps10863 {
  config: DeepPartial10863<NestedConfig10863>;
  path?: ConfigPaths10863;
}

const HeavyComponent10863 = memo(function HeavyComponent10863({ config }: HeavyProps10863) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10863) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10863 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10863: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10863.displayName = 'HeavyComponent10863';
export default HeavyComponent10863;
