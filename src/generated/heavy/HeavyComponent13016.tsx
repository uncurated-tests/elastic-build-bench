'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13016<T> = T extends (infer U)[]
  ? DeepReadonlyArray13016<U>
  : T extends object
  ? DeepReadonlyObject13016<T>
  : T;

interface DeepReadonlyArray13016<T> extends ReadonlyArray<DeepReadonly13016<T>> {}

type DeepReadonlyObject13016<T> = {
  readonly [P in keyof T]: DeepReadonly13016<T[P]>;
};

type UnionToIntersection13016<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13016<T> = UnionToIntersection13016<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13016<T extends unknown[], V> = [...T, V];

type TuplifyUnion13016<T, L = LastOf13016<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13016<TuplifyUnion13016<Exclude<T, L>>, L>;

type DeepPartial13016<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13016<T[P]> }
  : T;

type Paths13016<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13016<K, Paths13016<T[K], Prev13016[D]>> : never }[keyof T]
  : never;

type Prev13016 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13016<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13016 {
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

type ConfigPaths13016 = Paths13016<NestedConfig13016>;

interface HeavyProps13016 {
  config: DeepPartial13016<NestedConfig13016>;
  path?: ConfigPaths13016;
}

const HeavyComponent13016 = memo(function HeavyComponent13016({ config }: HeavyProps13016) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13016) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13016 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13016: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13016.displayName = 'HeavyComponent13016';
export default HeavyComponent13016;
