'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13791<T> = T extends (infer U)[]
  ? DeepReadonlyArray13791<U>
  : T extends object
  ? DeepReadonlyObject13791<T>
  : T;

interface DeepReadonlyArray13791<T> extends ReadonlyArray<DeepReadonly13791<T>> {}

type DeepReadonlyObject13791<T> = {
  readonly [P in keyof T]: DeepReadonly13791<T[P]>;
};

type UnionToIntersection13791<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13791<T> = UnionToIntersection13791<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13791<T extends unknown[], V> = [...T, V];

type TuplifyUnion13791<T, L = LastOf13791<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13791<TuplifyUnion13791<Exclude<T, L>>, L>;

type DeepPartial13791<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13791<T[P]> }
  : T;

type Paths13791<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13791<K, Paths13791<T[K], Prev13791[D]>> : never }[keyof T]
  : never;

type Prev13791 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13791<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13791 {
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

type ConfigPaths13791 = Paths13791<NestedConfig13791>;

interface HeavyProps13791 {
  config: DeepPartial13791<NestedConfig13791>;
  path?: ConfigPaths13791;
}

const HeavyComponent13791 = memo(function HeavyComponent13791({ config }: HeavyProps13791) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13791) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13791 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13791: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13791.displayName = 'HeavyComponent13791';
export default HeavyComponent13791;
