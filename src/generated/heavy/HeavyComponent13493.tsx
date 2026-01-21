'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13493<T> = T extends (infer U)[]
  ? DeepReadonlyArray13493<U>
  : T extends object
  ? DeepReadonlyObject13493<T>
  : T;

interface DeepReadonlyArray13493<T> extends ReadonlyArray<DeepReadonly13493<T>> {}

type DeepReadonlyObject13493<T> = {
  readonly [P in keyof T]: DeepReadonly13493<T[P]>;
};

type UnionToIntersection13493<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13493<T> = UnionToIntersection13493<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13493<T extends unknown[], V> = [...T, V];

type TuplifyUnion13493<T, L = LastOf13493<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13493<TuplifyUnion13493<Exclude<T, L>>, L>;

type DeepPartial13493<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13493<T[P]> }
  : T;

type Paths13493<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13493<K, Paths13493<T[K], Prev13493[D]>> : never }[keyof T]
  : never;

type Prev13493 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13493<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13493 {
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

type ConfigPaths13493 = Paths13493<NestedConfig13493>;

interface HeavyProps13493 {
  config: DeepPartial13493<NestedConfig13493>;
  path?: ConfigPaths13493;
}

const HeavyComponent13493 = memo(function HeavyComponent13493({ config }: HeavyProps13493) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13493) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13493 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13493: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13493.displayName = 'HeavyComponent13493';
export default HeavyComponent13493;
