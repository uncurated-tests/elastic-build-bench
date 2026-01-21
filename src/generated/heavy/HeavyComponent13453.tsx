'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13453<T> = T extends (infer U)[]
  ? DeepReadonlyArray13453<U>
  : T extends object
  ? DeepReadonlyObject13453<T>
  : T;

interface DeepReadonlyArray13453<T> extends ReadonlyArray<DeepReadonly13453<T>> {}

type DeepReadonlyObject13453<T> = {
  readonly [P in keyof T]: DeepReadonly13453<T[P]>;
};

type UnionToIntersection13453<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13453<T> = UnionToIntersection13453<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13453<T extends unknown[], V> = [...T, V];

type TuplifyUnion13453<T, L = LastOf13453<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13453<TuplifyUnion13453<Exclude<T, L>>, L>;

type DeepPartial13453<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13453<T[P]> }
  : T;

type Paths13453<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13453<K, Paths13453<T[K], Prev13453[D]>> : never }[keyof T]
  : never;

type Prev13453 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13453<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13453 {
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

type ConfigPaths13453 = Paths13453<NestedConfig13453>;

interface HeavyProps13453 {
  config: DeepPartial13453<NestedConfig13453>;
  path?: ConfigPaths13453;
}

const HeavyComponent13453 = memo(function HeavyComponent13453({ config }: HeavyProps13453) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13453) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13453 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13453: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13453.displayName = 'HeavyComponent13453';
export default HeavyComponent13453;
