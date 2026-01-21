'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13108<T> = T extends (infer U)[]
  ? DeepReadonlyArray13108<U>
  : T extends object
  ? DeepReadonlyObject13108<T>
  : T;

interface DeepReadonlyArray13108<T> extends ReadonlyArray<DeepReadonly13108<T>> {}

type DeepReadonlyObject13108<T> = {
  readonly [P in keyof T]: DeepReadonly13108<T[P]>;
};

type UnionToIntersection13108<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13108<T> = UnionToIntersection13108<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13108<T extends unknown[], V> = [...T, V];

type TuplifyUnion13108<T, L = LastOf13108<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13108<TuplifyUnion13108<Exclude<T, L>>, L>;

type DeepPartial13108<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13108<T[P]> }
  : T;

type Paths13108<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13108<K, Paths13108<T[K], Prev13108[D]>> : never }[keyof T]
  : never;

type Prev13108 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13108<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13108 {
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

type ConfigPaths13108 = Paths13108<NestedConfig13108>;

interface HeavyProps13108 {
  config: DeepPartial13108<NestedConfig13108>;
  path?: ConfigPaths13108;
}

const HeavyComponent13108 = memo(function HeavyComponent13108({ config }: HeavyProps13108) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13108) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13108 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13108: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13108.displayName = 'HeavyComponent13108';
export default HeavyComponent13108;
