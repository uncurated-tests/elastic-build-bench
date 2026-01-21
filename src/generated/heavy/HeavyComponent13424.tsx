'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13424<T> = T extends (infer U)[]
  ? DeepReadonlyArray13424<U>
  : T extends object
  ? DeepReadonlyObject13424<T>
  : T;

interface DeepReadonlyArray13424<T> extends ReadonlyArray<DeepReadonly13424<T>> {}

type DeepReadonlyObject13424<T> = {
  readonly [P in keyof T]: DeepReadonly13424<T[P]>;
};

type UnionToIntersection13424<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13424<T> = UnionToIntersection13424<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13424<T extends unknown[], V> = [...T, V];

type TuplifyUnion13424<T, L = LastOf13424<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13424<TuplifyUnion13424<Exclude<T, L>>, L>;

type DeepPartial13424<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13424<T[P]> }
  : T;

type Paths13424<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13424<K, Paths13424<T[K], Prev13424[D]>> : never }[keyof T]
  : never;

type Prev13424 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13424<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13424 {
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

type ConfigPaths13424 = Paths13424<NestedConfig13424>;

interface HeavyProps13424 {
  config: DeepPartial13424<NestedConfig13424>;
  path?: ConfigPaths13424;
}

const HeavyComponent13424 = memo(function HeavyComponent13424({ config }: HeavyProps13424) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13424) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13424 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13424: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13424.displayName = 'HeavyComponent13424';
export default HeavyComponent13424;
