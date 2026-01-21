'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10793<T> = T extends (infer U)[]
  ? DeepReadonlyArray10793<U>
  : T extends object
  ? DeepReadonlyObject10793<T>
  : T;

interface DeepReadonlyArray10793<T> extends ReadonlyArray<DeepReadonly10793<T>> {}

type DeepReadonlyObject10793<T> = {
  readonly [P in keyof T]: DeepReadonly10793<T[P]>;
};

type UnionToIntersection10793<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10793<T> = UnionToIntersection10793<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10793<T extends unknown[], V> = [...T, V];

type TuplifyUnion10793<T, L = LastOf10793<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10793<TuplifyUnion10793<Exclude<T, L>>, L>;

type DeepPartial10793<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10793<T[P]> }
  : T;

type Paths10793<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10793<K, Paths10793<T[K], Prev10793[D]>> : never }[keyof T]
  : never;

type Prev10793 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10793<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10793 {
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

type ConfigPaths10793 = Paths10793<NestedConfig10793>;

interface HeavyProps10793 {
  config: DeepPartial10793<NestedConfig10793>;
  path?: ConfigPaths10793;
}

const HeavyComponent10793 = memo(function HeavyComponent10793({ config }: HeavyProps10793) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10793) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10793 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10793: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10793.displayName = 'HeavyComponent10793';
export default HeavyComponent10793;
