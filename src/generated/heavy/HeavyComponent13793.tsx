'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13793<T> = T extends (infer U)[]
  ? DeepReadonlyArray13793<U>
  : T extends object
  ? DeepReadonlyObject13793<T>
  : T;

interface DeepReadonlyArray13793<T> extends ReadonlyArray<DeepReadonly13793<T>> {}

type DeepReadonlyObject13793<T> = {
  readonly [P in keyof T]: DeepReadonly13793<T[P]>;
};

type UnionToIntersection13793<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13793<T> = UnionToIntersection13793<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13793<T extends unknown[], V> = [...T, V];

type TuplifyUnion13793<T, L = LastOf13793<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13793<TuplifyUnion13793<Exclude<T, L>>, L>;

type DeepPartial13793<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13793<T[P]> }
  : T;

type Paths13793<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13793<K, Paths13793<T[K], Prev13793[D]>> : never }[keyof T]
  : never;

type Prev13793 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13793<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13793 {
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

type ConfigPaths13793 = Paths13793<NestedConfig13793>;

interface HeavyProps13793 {
  config: DeepPartial13793<NestedConfig13793>;
  path?: ConfigPaths13793;
}

const HeavyComponent13793 = memo(function HeavyComponent13793({ config }: HeavyProps13793) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13793) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13793 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13793: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13793.displayName = 'HeavyComponent13793';
export default HeavyComponent13793;
