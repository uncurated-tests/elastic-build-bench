'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13127<T> = T extends (infer U)[]
  ? DeepReadonlyArray13127<U>
  : T extends object
  ? DeepReadonlyObject13127<T>
  : T;

interface DeepReadonlyArray13127<T> extends ReadonlyArray<DeepReadonly13127<T>> {}

type DeepReadonlyObject13127<T> = {
  readonly [P in keyof T]: DeepReadonly13127<T[P]>;
};

type UnionToIntersection13127<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13127<T> = UnionToIntersection13127<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13127<T extends unknown[], V> = [...T, V];

type TuplifyUnion13127<T, L = LastOf13127<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13127<TuplifyUnion13127<Exclude<T, L>>, L>;

type DeepPartial13127<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13127<T[P]> }
  : T;

type Paths13127<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13127<K, Paths13127<T[K], Prev13127[D]>> : never }[keyof T]
  : never;

type Prev13127 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13127<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13127 {
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

type ConfigPaths13127 = Paths13127<NestedConfig13127>;

interface HeavyProps13127 {
  config: DeepPartial13127<NestedConfig13127>;
  path?: ConfigPaths13127;
}

const HeavyComponent13127 = memo(function HeavyComponent13127({ config }: HeavyProps13127) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13127) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13127 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13127: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13127.displayName = 'HeavyComponent13127';
export default HeavyComponent13127;
