'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13061<T> = T extends (infer U)[]
  ? DeepReadonlyArray13061<U>
  : T extends object
  ? DeepReadonlyObject13061<T>
  : T;

interface DeepReadonlyArray13061<T> extends ReadonlyArray<DeepReadonly13061<T>> {}

type DeepReadonlyObject13061<T> = {
  readonly [P in keyof T]: DeepReadonly13061<T[P]>;
};

type UnionToIntersection13061<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13061<T> = UnionToIntersection13061<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13061<T extends unknown[], V> = [...T, V];

type TuplifyUnion13061<T, L = LastOf13061<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13061<TuplifyUnion13061<Exclude<T, L>>, L>;

type DeepPartial13061<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13061<T[P]> }
  : T;

type Paths13061<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13061<K, Paths13061<T[K], Prev13061[D]>> : never }[keyof T]
  : never;

type Prev13061 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13061<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13061 {
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

type ConfigPaths13061 = Paths13061<NestedConfig13061>;

interface HeavyProps13061 {
  config: DeepPartial13061<NestedConfig13061>;
  path?: ConfigPaths13061;
}

const HeavyComponent13061 = memo(function HeavyComponent13061({ config }: HeavyProps13061) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13061) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13061 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13061: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13061.displayName = 'HeavyComponent13061';
export default HeavyComponent13061;
