'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13817<T> = T extends (infer U)[]
  ? DeepReadonlyArray13817<U>
  : T extends object
  ? DeepReadonlyObject13817<T>
  : T;

interface DeepReadonlyArray13817<T> extends ReadonlyArray<DeepReadonly13817<T>> {}

type DeepReadonlyObject13817<T> = {
  readonly [P in keyof T]: DeepReadonly13817<T[P]>;
};

type UnionToIntersection13817<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13817<T> = UnionToIntersection13817<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13817<T extends unknown[], V> = [...T, V];

type TuplifyUnion13817<T, L = LastOf13817<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13817<TuplifyUnion13817<Exclude<T, L>>, L>;

type DeepPartial13817<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13817<T[P]> }
  : T;

type Paths13817<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13817<K, Paths13817<T[K], Prev13817[D]>> : never }[keyof T]
  : never;

type Prev13817 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13817<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13817 {
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

type ConfigPaths13817 = Paths13817<NestedConfig13817>;

interface HeavyProps13817 {
  config: DeepPartial13817<NestedConfig13817>;
  path?: ConfigPaths13817;
}

const HeavyComponent13817 = memo(function HeavyComponent13817({ config }: HeavyProps13817) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13817) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13817 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13817: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13817.displayName = 'HeavyComponent13817';
export default HeavyComponent13817;
