'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13123<T> = T extends (infer U)[]
  ? DeepReadonlyArray13123<U>
  : T extends object
  ? DeepReadonlyObject13123<T>
  : T;

interface DeepReadonlyArray13123<T> extends ReadonlyArray<DeepReadonly13123<T>> {}

type DeepReadonlyObject13123<T> = {
  readonly [P in keyof T]: DeepReadonly13123<T[P]>;
};

type UnionToIntersection13123<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13123<T> = UnionToIntersection13123<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13123<T extends unknown[], V> = [...T, V];

type TuplifyUnion13123<T, L = LastOf13123<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13123<TuplifyUnion13123<Exclude<T, L>>, L>;

type DeepPartial13123<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13123<T[P]> }
  : T;

type Paths13123<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13123<K, Paths13123<T[K], Prev13123[D]>> : never }[keyof T]
  : never;

type Prev13123 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13123<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13123 {
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

type ConfigPaths13123 = Paths13123<NestedConfig13123>;

interface HeavyProps13123 {
  config: DeepPartial13123<NestedConfig13123>;
  path?: ConfigPaths13123;
}

const HeavyComponent13123 = memo(function HeavyComponent13123({ config }: HeavyProps13123) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13123) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13123 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13123: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13123.displayName = 'HeavyComponent13123';
export default HeavyComponent13123;
