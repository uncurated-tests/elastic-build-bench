'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13015<T> = T extends (infer U)[]
  ? DeepReadonlyArray13015<U>
  : T extends object
  ? DeepReadonlyObject13015<T>
  : T;

interface DeepReadonlyArray13015<T> extends ReadonlyArray<DeepReadonly13015<T>> {}

type DeepReadonlyObject13015<T> = {
  readonly [P in keyof T]: DeepReadonly13015<T[P]>;
};

type UnionToIntersection13015<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13015<T> = UnionToIntersection13015<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13015<T extends unknown[], V> = [...T, V];

type TuplifyUnion13015<T, L = LastOf13015<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13015<TuplifyUnion13015<Exclude<T, L>>, L>;

type DeepPartial13015<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13015<T[P]> }
  : T;

type Paths13015<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13015<K, Paths13015<T[K], Prev13015[D]>> : never }[keyof T]
  : never;

type Prev13015 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13015<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13015 {
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

type ConfigPaths13015 = Paths13015<NestedConfig13015>;

interface HeavyProps13015 {
  config: DeepPartial13015<NestedConfig13015>;
  path?: ConfigPaths13015;
}

const HeavyComponent13015 = memo(function HeavyComponent13015({ config }: HeavyProps13015) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13015) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13015 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13015: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13015.displayName = 'HeavyComponent13015';
export default HeavyComponent13015;
