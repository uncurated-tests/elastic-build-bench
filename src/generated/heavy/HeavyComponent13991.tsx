'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13991<T> = T extends (infer U)[]
  ? DeepReadonlyArray13991<U>
  : T extends object
  ? DeepReadonlyObject13991<T>
  : T;

interface DeepReadonlyArray13991<T> extends ReadonlyArray<DeepReadonly13991<T>> {}

type DeepReadonlyObject13991<T> = {
  readonly [P in keyof T]: DeepReadonly13991<T[P]>;
};

type UnionToIntersection13991<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13991<T> = UnionToIntersection13991<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13991<T extends unknown[], V> = [...T, V];

type TuplifyUnion13991<T, L = LastOf13991<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13991<TuplifyUnion13991<Exclude<T, L>>, L>;

type DeepPartial13991<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13991<T[P]> }
  : T;

type Paths13991<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13991<K, Paths13991<T[K], Prev13991[D]>> : never }[keyof T]
  : never;

type Prev13991 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13991<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13991 {
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

type ConfigPaths13991 = Paths13991<NestedConfig13991>;

interface HeavyProps13991 {
  config: DeepPartial13991<NestedConfig13991>;
  path?: ConfigPaths13991;
}

const HeavyComponent13991 = memo(function HeavyComponent13991({ config }: HeavyProps13991) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13991) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13991 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13991: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13991.displayName = 'HeavyComponent13991';
export default HeavyComponent13991;
