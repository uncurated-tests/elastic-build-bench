'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13208<T> = T extends (infer U)[]
  ? DeepReadonlyArray13208<U>
  : T extends object
  ? DeepReadonlyObject13208<T>
  : T;

interface DeepReadonlyArray13208<T> extends ReadonlyArray<DeepReadonly13208<T>> {}

type DeepReadonlyObject13208<T> = {
  readonly [P in keyof T]: DeepReadonly13208<T[P]>;
};

type UnionToIntersection13208<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13208<T> = UnionToIntersection13208<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13208<T extends unknown[], V> = [...T, V];

type TuplifyUnion13208<T, L = LastOf13208<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13208<TuplifyUnion13208<Exclude<T, L>>, L>;

type DeepPartial13208<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13208<T[P]> }
  : T;

type Paths13208<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13208<K, Paths13208<T[K], Prev13208[D]>> : never }[keyof T]
  : never;

type Prev13208 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13208<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13208 {
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

type ConfigPaths13208 = Paths13208<NestedConfig13208>;

interface HeavyProps13208 {
  config: DeepPartial13208<NestedConfig13208>;
  path?: ConfigPaths13208;
}

const HeavyComponent13208 = memo(function HeavyComponent13208({ config }: HeavyProps13208) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13208) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13208 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13208: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13208.displayName = 'HeavyComponent13208';
export default HeavyComponent13208;
