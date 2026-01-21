'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13331<T> = T extends (infer U)[]
  ? DeepReadonlyArray13331<U>
  : T extends object
  ? DeepReadonlyObject13331<T>
  : T;

interface DeepReadonlyArray13331<T> extends ReadonlyArray<DeepReadonly13331<T>> {}

type DeepReadonlyObject13331<T> = {
  readonly [P in keyof T]: DeepReadonly13331<T[P]>;
};

type UnionToIntersection13331<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13331<T> = UnionToIntersection13331<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13331<T extends unknown[], V> = [...T, V];

type TuplifyUnion13331<T, L = LastOf13331<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13331<TuplifyUnion13331<Exclude<T, L>>, L>;

type DeepPartial13331<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13331<T[P]> }
  : T;

type Paths13331<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13331<K, Paths13331<T[K], Prev13331[D]>> : never }[keyof T]
  : never;

type Prev13331 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13331<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13331 {
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

type ConfigPaths13331 = Paths13331<NestedConfig13331>;

interface HeavyProps13331 {
  config: DeepPartial13331<NestedConfig13331>;
  path?: ConfigPaths13331;
}

const HeavyComponent13331 = memo(function HeavyComponent13331({ config }: HeavyProps13331) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13331) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13331 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13331: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13331.displayName = 'HeavyComponent13331';
export default HeavyComponent13331;
