'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13631<T> = T extends (infer U)[]
  ? DeepReadonlyArray13631<U>
  : T extends object
  ? DeepReadonlyObject13631<T>
  : T;

interface DeepReadonlyArray13631<T> extends ReadonlyArray<DeepReadonly13631<T>> {}

type DeepReadonlyObject13631<T> = {
  readonly [P in keyof T]: DeepReadonly13631<T[P]>;
};

type UnionToIntersection13631<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13631<T> = UnionToIntersection13631<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13631<T extends unknown[], V> = [...T, V];

type TuplifyUnion13631<T, L = LastOf13631<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13631<TuplifyUnion13631<Exclude<T, L>>, L>;

type DeepPartial13631<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13631<T[P]> }
  : T;

type Paths13631<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13631<K, Paths13631<T[K], Prev13631[D]>> : never }[keyof T]
  : never;

type Prev13631 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13631<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13631 {
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

type ConfigPaths13631 = Paths13631<NestedConfig13631>;

interface HeavyProps13631 {
  config: DeepPartial13631<NestedConfig13631>;
  path?: ConfigPaths13631;
}

const HeavyComponent13631 = memo(function HeavyComponent13631({ config }: HeavyProps13631) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13631) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13631 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13631: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13631.displayName = 'HeavyComponent13631';
export default HeavyComponent13631;
