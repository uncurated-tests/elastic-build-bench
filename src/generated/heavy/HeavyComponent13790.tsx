'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13790<T> = T extends (infer U)[]
  ? DeepReadonlyArray13790<U>
  : T extends object
  ? DeepReadonlyObject13790<T>
  : T;

interface DeepReadonlyArray13790<T> extends ReadonlyArray<DeepReadonly13790<T>> {}

type DeepReadonlyObject13790<T> = {
  readonly [P in keyof T]: DeepReadonly13790<T[P]>;
};

type UnionToIntersection13790<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13790<T> = UnionToIntersection13790<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13790<T extends unknown[], V> = [...T, V];

type TuplifyUnion13790<T, L = LastOf13790<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13790<TuplifyUnion13790<Exclude<T, L>>, L>;

type DeepPartial13790<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13790<T[P]> }
  : T;

type Paths13790<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13790<K, Paths13790<T[K], Prev13790[D]>> : never }[keyof T]
  : never;

type Prev13790 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13790<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13790 {
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

type ConfigPaths13790 = Paths13790<NestedConfig13790>;

interface HeavyProps13790 {
  config: DeepPartial13790<NestedConfig13790>;
  path?: ConfigPaths13790;
}

const HeavyComponent13790 = memo(function HeavyComponent13790({ config }: HeavyProps13790) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13790) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13790 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13790: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13790.displayName = 'HeavyComponent13790';
export default HeavyComponent13790;
