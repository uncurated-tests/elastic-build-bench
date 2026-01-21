'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13079<T> = T extends (infer U)[]
  ? DeepReadonlyArray13079<U>
  : T extends object
  ? DeepReadonlyObject13079<T>
  : T;

interface DeepReadonlyArray13079<T> extends ReadonlyArray<DeepReadonly13079<T>> {}

type DeepReadonlyObject13079<T> = {
  readonly [P in keyof T]: DeepReadonly13079<T[P]>;
};

type UnionToIntersection13079<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13079<T> = UnionToIntersection13079<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13079<T extends unknown[], V> = [...T, V];

type TuplifyUnion13079<T, L = LastOf13079<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13079<TuplifyUnion13079<Exclude<T, L>>, L>;

type DeepPartial13079<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13079<T[P]> }
  : T;

type Paths13079<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13079<K, Paths13079<T[K], Prev13079[D]>> : never }[keyof T]
  : never;

type Prev13079 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13079<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13079 {
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

type ConfigPaths13079 = Paths13079<NestedConfig13079>;

interface HeavyProps13079 {
  config: DeepPartial13079<NestedConfig13079>;
  path?: ConfigPaths13079;
}

const HeavyComponent13079 = memo(function HeavyComponent13079({ config }: HeavyProps13079) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13079) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13079 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13079: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13079.displayName = 'HeavyComponent13079';
export default HeavyComponent13079;
