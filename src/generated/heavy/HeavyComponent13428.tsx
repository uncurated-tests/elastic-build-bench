'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13428<T> = T extends (infer U)[]
  ? DeepReadonlyArray13428<U>
  : T extends object
  ? DeepReadonlyObject13428<T>
  : T;

interface DeepReadonlyArray13428<T> extends ReadonlyArray<DeepReadonly13428<T>> {}

type DeepReadonlyObject13428<T> = {
  readonly [P in keyof T]: DeepReadonly13428<T[P]>;
};

type UnionToIntersection13428<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13428<T> = UnionToIntersection13428<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13428<T extends unknown[], V> = [...T, V];

type TuplifyUnion13428<T, L = LastOf13428<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13428<TuplifyUnion13428<Exclude<T, L>>, L>;

type DeepPartial13428<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13428<T[P]> }
  : T;

type Paths13428<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13428<K, Paths13428<T[K], Prev13428[D]>> : never }[keyof T]
  : never;

type Prev13428 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13428<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13428 {
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

type ConfigPaths13428 = Paths13428<NestedConfig13428>;

interface HeavyProps13428 {
  config: DeepPartial13428<NestedConfig13428>;
  path?: ConfigPaths13428;
}

const HeavyComponent13428 = memo(function HeavyComponent13428({ config }: HeavyProps13428) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13428) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13428 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13428: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13428.displayName = 'HeavyComponent13428';
export default HeavyComponent13428;
