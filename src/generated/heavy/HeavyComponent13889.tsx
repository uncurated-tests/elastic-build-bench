'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13889<T> = T extends (infer U)[]
  ? DeepReadonlyArray13889<U>
  : T extends object
  ? DeepReadonlyObject13889<T>
  : T;

interface DeepReadonlyArray13889<T> extends ReadonlyArray<DeepReadonly13889<T>> {}

type DeepReadonlyObject13889<T> = {
  readonly [P in keyof T]: DeepReadonly13889<T[P]>;
};

type UnionToIntersection13889<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13889<T> = UnionToIntersection13889<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13889<T extends unknown[], V> = [...T, V];

type TuplifyUnion13889<T, L = LastOf13889<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13889<TuplifyUnion13889<Exclude<T, L>>, L>;

type DeepPartial13889<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13889<T[P]> }
  : T;

type Paths13889<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13889<K, Paths13889<T[K], Prev13889[D]>> : never }[keyof T]
  : never;

type Prev13889 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13889<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13889 {
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

type ConfigPaths13889 = Paths13889<NestedConfig13889>;

interface HeavyProps13889 {
  config: DeepPartial13889<NestedConfig13889>;
  path?: ConfigPaths13889;
}

const HeavyComponent13889 = memo(function HeavyComponent13889({ config }: HeavyProps13889) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13889) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13889 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13889: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13889.displayName = 'HeavyComponent13889';
export default HeavyComponent13889;
