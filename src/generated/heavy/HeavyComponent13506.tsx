'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13506<T> = T extends (infer U)[]
  ? DeepReadonlyArray13506<U>
  : T extends object
  ? DeepReadonlyObject13506<T>
  : T;

interface DeepReadonlyArray13506<T> extends ReadonlyArray<DeepReadonly13506<T>> {}

type DeepReadonlyObject13506<T> = {
  readonly [P in keyof T]: DeepReadonly13506<T[P]>;
};

type UnionToIntersection13506<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13506<T> = UnionToIntersection13506<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13506<T extends unknown[], V> = [...T, V];

type TuplifyUnion13506<T, L = LastOf13506<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13506<TuplifyUnion13506<Exclude<T, L>>, L>;

type DeepPartial13506<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13506<T[P]> }
  : T;

type Paths13506<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13506<K, Paths13506<T[K], Prev13506[D]>> : never }[keyof T]
  : never;

type Prev13506 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13506<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13506 {
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

type ConfigPaths13506 = Paths13506<NestedConfig13506>;

interface HeavyProps13506 {
  config: DeepPartial13506<NestedConfig13506>;
  path?: ConfigPaths13506;
}

const HeavyComponent13506 = memo(function HeavyComponent13506({ config }: HeavyProps13506) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13506) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13506 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13506: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13506.displayName = 'HeavyComponent13506';
export default HeavyComponent13506;
