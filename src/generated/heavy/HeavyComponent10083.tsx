'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10083<T> = T extends (infer U)[]
  ? DeepReadonlyArray10083<U>
  : T extends object
  ? DeepReadonlyObject10083<T>
  : T;

interface DeepReadonlyArray10083<T> extends ReadonlyArray<DeepReadonly10083<T>> {}

type DeepReadonlyObject10083<T> = {
  readonly [P in keyof T]: DeepReadonly10083<T[P]>;
};

type UnionToIntersection10083<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10083<T> = UnionToIntersection10083<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10083<T extends unknown[], V> = [...T, V];

type TuplifyUnion10083<T, L = LastOf10083<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10083<TuplifyUnion10083<Exclude<T, L>>, L>;

type DeepPartial10083<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10083<T[P]> }
  : T;

type Paths10083<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10083<K, Paths10083<T[K], Prev10083[D]>> : never }[keyof T]
  : never;

type Prev10083 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10083<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10083 {
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

type ConfigPaths10083 = Paths10083<NestedConfig10083>;

interface HeavyProps10083 {
  config: DeepPartial10083<NestedConfig10083>;
  path?: ConfigPaths10083;
}

const HeavyComponent10083 = memo(function HeavyComponent10083({ config }: HeavyProps10083) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10083) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10083 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10083: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10083.displayName = 'HeavyComponent10083';
export default HeavyComponent10083;
