'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13083<T> = T extends (infer U)[]
  ? DeepReadonlyArray13083<U>
  : T extends object
  ? DeepReadonlyObject13083<T>
  : T;

interface DeepReadonlyArray13083<T> extends ReadonlyArray<DeepReadonly13083<T>> {}

type DeepReadonlyObject13083<T> = {
  readonly [P in keyof T]: DeepReadonly13083<T[P]>;
};

type UnionToIntersection13083<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13083<T> = UnionToIntersection13083<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13083<T extends unknown[], V> = [...T, V];

type TuplifyUnion13083<T, L = LastOf13083<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13083<TuplifyUnion13083<Exclude<T, L>>, L>;

type DeepPartial13083<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13083<T[P]> }
  : T;

type Paths13083<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13083<K, Paths13083<T[K], Prev13083[D]>> : never }[keyof T]
  : never;

type Prev13083 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13083<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13083 {
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

type ConfigPaths13083 = Paths13083<NestedConfig13083>;

interface HeavyProps13083 {
  config: DeepPartial13083<NestedConfig13083>;
  path?: ConfigPaths13083;
}

const HeavyComponent13083 = memo(function HeavyComponent13083({ config }: HeavyProps13083) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13083) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13083 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13083: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13083.displayName = 'HeavyComponent13083';
export default HeavyComponent13083;
