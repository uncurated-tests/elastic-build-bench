'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13302<T> = T extends (infer U)[]
  ? DeepReadonlyArray13302<U>
  : T extends object
  ? DeepReadonlyObject13302<T>
  : T;

interface DeepReadonlyArray13302<T> extends ReadonlyArray<DeepReadonly13302<T>> {}

type DeepReadonlyObject13302<T> = {
  readonly [P in keyof T]: DeepReadonly13302<T[P]>;
};

type UnionToIntersection13302<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13302<T> = UnionToIntersection13302<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13302<T extends unknown[], V> = [...T, V];

type TuplifyUnion13302<T, L = LastOf13302<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13302<TuplifyUnion13302<Exclude<T, L>>, L>;

type DeepPartial13302<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13302<T[P]> }
  : T;

type Paths13302<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13302<K, Paths13302<T[K], Prev13302[D]>> : never }[keyof T]
  : never;

type Prev13302 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13302<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13302 {
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

type ConfigPaths13302 = Paths13302<NestedConfig13302>;

interface HeavyProps13302 {
  config: DeepPartial13302<NestedConfig13302>;
  path?: ConfigPaths13302;
}

const HeavyComponent13302 = memo(function HeavyComponent13302({ config }: HeavyProps13302) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13302) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13302 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13302: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13302.displayName = 'HeavyComponent13302';
export default HeavyComponent13302;
