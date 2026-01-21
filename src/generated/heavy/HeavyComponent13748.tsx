'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13748<T> = T extends (infer U)[]
  ? DeepReadonlyArray13748<U>
  : T extends object
  ? DeepReadonlyObject13748<T>
  : T;

interface DeepReadonlyArray13748<T> extends ReadonlyArray<DeepReadonly13748<T>> {}

type DeepReadonlyObject13748<T> = {
  readonly [P in keyof T]: DeepReadonly13748<T[P]>;
};

type UnionToIntersection13748<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13748<T> = UnionToIntersection13748<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13748<T extends unknown[], V> = [...T, V];

type TuplifyUnion13748<T, L = LastOf13748<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13748<TuplifyUnion13748<Exclude<T, L>>, L>;

type DeepPartial13748<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13748<T[P]> }
  : T;

type Paths13748<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13748<K, Paths13748<T[K], Prev13748[D]>> : never }[keyof T]
  : never;

type Prev13748 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13748<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13748 {
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

type ConfigPaths13748 = Paths13748<NestedConfig13748>;

interface HeavyProps13748 {
  config: DeepPartial13748<NestedConfig13748>;
  path?: ConfigPaths13748;
}

const HeavyComponent13748 = memo(function HeavyComponent13748({ config }: HeavyProps13748) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13748) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13748 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13748: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13748.displayName = 'HeavyComponent13748';
export default HeavyComponent13748;
