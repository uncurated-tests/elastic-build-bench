'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13255<T> = T extends (infer U)[]
  ? DeepReadonlyArray13255<U>
  : T extends object
  ? DeepReadonlyObject13255<T>
  : T;

interface DeepReadonlyArray13255<T> extends ReadonlyArray<DeepReadonly13255<T>> {}

type DeepReadonlyObject13255<T> = {
  readonly [P in keyof T]: DeepReadonly13255<T[P]>;
};

type UnionToIntersection13255<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13255<T> = UnionToIntersection13255<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13255<T extends unknown[], V> = [...T, V];

type TuplifyUnion13255<T, L = LastOf13255<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13255<TuplifyUnion13255<Exclude<T, L>>, L>;

type DeepPartial13255<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13255<T[P]> }
  : T;

type Paths13255<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13255<K, Paths13255<T[K], Prev13255[D]>> : never }[keyof T]
  : never;

type Prev13255 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13255<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13255 {
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

type ConfigPaths13255 = Paths13255<NestedConfig13255>;

interface HeavyProps13255 {
  config: DeepPartial13255<NestedConfig13255>;
  path?: ConfigPaths13255;
}

const HeavyComponent13255 = memo(function HeavyComponent13255({ config }: HeavyProps13255) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13255) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13255 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13255: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13255.displayName = 'HeavyComponent13255';
export default HeavyComponent13255;
