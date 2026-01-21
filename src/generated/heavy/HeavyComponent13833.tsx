'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13833<T> = T extends (infer U)[]
  ? DeepReadonlyArray13833<U>
  : T extends object
  ? DeepReadonlyObject13833<T>
  : T;

interface DeepReadonlyArray13833<T> extends ReadonlyArray<DeepReadonly13833<T>> {}

type DeepReadonlyObject13833<T> = {
  readonly [P in keyof T]: DeepReadonly13833<T[P]>;
};

type UnionToIntersection13833<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13833<T> = UnionToIntersection13833<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13833<T extends unknown[], V> = [...T, V];

type TuplifyUnion13833<T, L = LastOf13833<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13833<TuplifyUnion13833<Exclude<T, L>>, L>;

type DeepPartial13833<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13833<T[P]> }
  : T;

type Paths13833<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13833<K, Paths13833<T[K], Prev13833[D]>> : never }[keyof T]
  : never;

type Prev13833 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13833<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13833 {
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

type ConfigPaths13833 = Paths13833<NestedConfig13833>;

interface HeavyProps13833 {
  config: DeepPartial13833<NestedConfig13833>;
  path?: ConfigPaths13833;
}

const HeavyComponent13833 = memo(function HeavyComponent13833({ config }: HeavyProps13833) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13833) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13833 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13833: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13833.displayName = 'HeavyComponent13833';
export default HeavyComponent13833;
