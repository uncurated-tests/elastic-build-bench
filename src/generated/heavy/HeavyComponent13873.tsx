'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13873<T> = T extends (infer U)[]
  ? DeepReadonlyArray13873<U>
  : T extends object
  ? DeepReadonlyObject13873<T>
  : T;

interface DeepReadonlyArray13873<T> extends ReadonlyArray<DeepReadonly13873<T>> {}

type DeepReadonlyObject13873<T> = {
  readonly [P in keyof T]: DeepReadonly13873<T[P]>;
};

type UnionToIntersection13873<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13873<T> = UnionToIntersection13873<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13873<T extends unknown[], V> = [...T, V];

type TuplifyUnion13873<T, L = LastOf13873<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13873<TuplifyUnion13873<Exclude<T, L>>, L>;

type DeepPartial13873<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13873<T[P]> }
  : T;

type Paths13873<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13873<K, Paths13873<T[K], Prev13873[D]>> : never }[keyof T]
  : never;

type Prev13873 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13873<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13873 {
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

type ConfigPaths13873 = Paths13873<NestedConfig13873>;

interface HeavyProps13873 {
  config: DeepPartial13873<NestedConfig13873>;
  path?: ConfigPaths13873;
}

const HeavyComponent13873 = memo(function HeavyComponent13873({ config }: HeavyProps13873) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13873) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13873 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13873: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13873.displayName = 'HeavyComponent13873';
export default HeavyComponent13873;
