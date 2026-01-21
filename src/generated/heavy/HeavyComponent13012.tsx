'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13012<T> = T extends (infer U)[]
  ? DeepReadonlyArray13012<U>
  : T extends object
  ? DeepReadonlyObject13012<T>
  : T;

interface DeepReadonlyArray13012<T> extends ReadonlyArray<DeepReadonly13012<T>> {}

type DeepReadonlyObject13012<T> = {
  readonly [P in keyof T]: DeepReadonly13012<T[P]>;
};

type UnionToIntersection13012<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13012<T> = UnionToIntersection13012<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13012<T extends unknown[], V> = [...T, V];

type TuplifyUnion13012<T, L = LastOf13012<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13012<TuplifyUnion13012<Exclude<T, L>>, L>;

type DeepPartial13012<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13012<T[P]> }
  : T;

type Paths13012<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13012<K, Paths13012<T[K], Prev13012[D]>> : never }[keyof T]
  : never;

type Prev13012 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13012<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13012 {
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

type ConfigPaths13012 = Paths13012<NestedConfig13012>;

interface HeavyProps13012 {
  config: DeepPartial13012<NestedConfig13012>;
  path?: ConfigPaths13012;
}

const HeavyComponent13012 = memo(function HeavyComponent13012({ config }: HeavyProps13012) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13012) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13012 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13012: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13012.displayName = 'HeavyComponent13012';
export default HeavyComponent13012;
