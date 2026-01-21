'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13710<T> = T extends (infer U)[]
  ? DeepReadonlyArray13710<U>
  : T extends object
  ? DeepReadonlyObject13710<T>
  : T;

interface DeepReadonlyArray13710<T> extends ReadonlyArray<DeepReadonly13710<T>> {}

type DeepReadonlyObject13710<T> = {
  readonly [P in keyof T]: DeepReadonly13710<T[P]>;
};

type UnionToIntersection13710<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13710<T> = UnionToIntersection13710<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13710<T extends unknown[], V> = [...T, V];

type TuplifyUnion13710<T, L = LastOf13710<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13710<TuplifyUnion13710<Exclude<T, L>>, L>;

type DeepPartial13710<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13710<T[P]> }
  : T;

type Paths13710<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13710<K, Paths13710<T[K], Prev13710[D]>> : never }[keyof T]
  : never;

type Prev13710 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13710<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13710 {
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

type ConfigPaths13710 = Paths13710<NestedConfig13710>;

interface HeavyProps13710 {
  config: DeepPartial13710<NestedConfig13710>;
  path?: ConfigPaths13710;
}

const HeavyComponent13710 = memo(function HeavyComponent13710({ config }: HeavyProps13710) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13710) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13710 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13710: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13710.displayName = 'HeavyComponent13710';
export default HeavyComponent13710;
