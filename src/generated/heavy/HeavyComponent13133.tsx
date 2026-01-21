'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13133<T> = T extends (infer U)[]
  ? DeepReadonlyArray13133<U>
  : T extends object
  ? DeepReadonlyObject13133<T>
  : T;

interface DeepReadonlyArray13133<T> extends ReadonlyArray<DeepReadonly13133<T>> {}

type DeepReadonlyObject13133<T> = {
  readonly [P in keyof T]: DeepReadonly13133<T[P]>;
};

type UnionToIntersection13133<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13133<T> = UnionToIntersection13133<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13133<T extends unknown[], V> = [...T, V];

type TuplifyUnion13133<T, L = LastOf13133<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13133<TuplifyUnion13133<Exclude<T, L>>, L>;

type DeepPartial13133<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13133<T[P]> }
  : T;

type Paths13133<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13133<K, Paths13133<T[K], Prev13133[D]>> : never }[keyof T]
  : never;

type Prev13133 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13133<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13133 {
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

type ConfigPaths13133 = Paths13133<NestedConfig13133>;

interface HeavyProps13133 {
  config: DeepPartial13133<NestedConfig13133>;
  path?: ConfigPaths13133;
}

const HeavyComponent13133 = memo(function HeavyComponent13133({ config }: HeavyProps13133) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13133) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13133 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13133: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13133.displayName = 'HeavyComponent13133';
export default HeavyComponent13133;
