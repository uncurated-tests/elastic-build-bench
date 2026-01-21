'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13415<T> = T extends (infer U)[]
  ? DeepReadonlyArray13415<U>
  : T extends object
  ? DeepReadonlyObject13415<T>
  : T;

interface DeepReadonlyArray13415<T> extends ReadonlyArray<DeepReadonly13415<T>> {}

type DeepReadonlyObject13415<T> = {
  readonly [P in keyof T]: DeepReadonly13415<T[P]>;
};

type UnionToIntersection13415<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13415<T> = UnionToIntersection13415<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13415<T extends unknown[], V> = [...T, V];

type TuplifyUnion13415<T, L = LastOf13415<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13415<TuplifyUnion13415<Exclude<T, L>>, L>;

type DeepPartial13415<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13415<T[P]> }
  : T;

type Paths13415<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13415<K, Paths13415<T[K], Prev13415[D]>> : never }[keyof T]
  : never;

type Prev13415 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13415<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13415 {
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

type ConfigPaths13415 = Paths13415<NestedConfig13415>;

interface HeavyProps13415 {
  config: DeepPartial13415<NestedConfig13415>;
  path?: ConfigPaths13415;
}

const HeavyComponent13415 = memo(function HeavyComponent13415({ config }: HeavyProps13415) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13415) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13415 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13415: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13415.displayName = 'HeavyComponent13415';
export default HeavyComponent13415;
