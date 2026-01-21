'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13532<T> = T extends (infer U)[]
  ? DeepReadonlyArray13532<U>
  : T extends object
  ? DeepReadonlyObject13532<T>
  : T;

interface DeepReadonlyArray13532<T> extends ReadonlyArray<DeepReadonly13532<T>> {}

type DeepReadonlyObject13532<T> = {
  readonly [P in keyof T]: DeepReadonly13532<T[P]>;
};

type UnionToIntersection13532<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13532<T> = UnionToIntersection13532<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13532<T extends unknown[], V> = [...T, V];

type TuplifyUnion13532<T, L = LastOf13532<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13532<TuplifyUnion13532<Exclude<T, L>>, L>;

type DeepPartial13532<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13532<T[P]> }
  : T;

type Paths13532<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13532<K, Paths13532<T[K], Prev13532[D]>> : never }[keyof T]
  : never;

type Prev13532 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13532<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13532 {
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

type ConfigPaths13532 = Paths13532<NestedConfig13532>;

interface HeavyProps13532 {
  config: DeepPartial13532<NestedConfig13532>;
  path?: ConfigPaths13532;
}

const HeavyComponent13532 = memo(function HeavyComponent13532({ config }: HeavyProps13532) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13532) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13532 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13532: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13532.displayName = 'HeavyComponent13532';
export default HeavyComponent13532;
