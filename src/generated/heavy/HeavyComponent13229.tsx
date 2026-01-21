'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13229<T> = T extends (infer U)[]
  ? DeepReadonlyArray13229<U>
  : T extends object
  ? DeepReadonlyObject13229<T>
  : T;

interface DeepReadonlyArray13229<T> extends ReadonlyArray<DeepReadonly13229<T>> {}

type DeepReadonlyObject13229<T> = {
  readonly [P in keyof T]: DeepReadonly13229<T[P]>;
};

type UnionToIntersection13229<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13229<T> = UnionToIntersection13229<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13229<T extends unknown[], V> = [...T, V];

type TuplifyUnion13229<T, L = LastOf13229<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13229<TuplifyUnion13229<Exclude<T, L>>, L>;

type DeepPartial13229<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13229<T[P]> }
  : T;

type Paths13229<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13229<K, Paths13229<T[K], Prev13229[D]>> : never }[keyof T]
  : never;

type Prev13229 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13229<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13229 {
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

type ConfigPaths13229 = Paths13229<NestedConfig13229>;

interface HeavyProps13229 {
  config: DeepPartial13229<NestedConfig13229>;
  path?: ConfigPaths13229;
}

const HeavyComponent13229 = memo(function HeavyComponent13229({ config }: HeavyProps13229) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13229) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13229 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13229: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13229.displayName = 'HeavyComponent13229';
export default HeavyComponent13229;
