'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13917<T> = T extends (infer U)[]
  ? DeepReadonlyArray13917<U>
  : T extends object
  ? DeepReadonlyObject13917<T>
  : T;

interface DeepReadonlyArray13917<T> extends ReadonlyArray<DeepReadonly13917<T>> {}

type DeepReadonlyObject13917<T> = {
  readonly [P in keyof T]: DeepReadonly13917<T[P]>;
};

type UnionToIntersection13917<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13917<T> = UnionToIntersection13917<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13917<T extends unknown[], V> = [...T, V];

type TuplifyUnion13917<T, L = LastOf13917<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13917<TuplifyUnion13917<Exclude<T, L>>, L>;

type DeepPartial13917<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13917<T[P]> }
  : T;

type Paths13917<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13917<K, Paths13917<T[K], Prev13917[D]>> : never }[keyof T]
  : never;

type Prev13917 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13917<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13917 {
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

type ConfigPaths13917 = Paths13917<NestedConfig13917>;

interface HeavyProps13917 {
  config: DeepPartial13917<NestedConfig13917>;
  path?: ConfigPaths13917;
}

const HeavyComponent13917 = memo(function HeavyComponent13917({ config }: HeavyProps13917) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13917) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13917 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13917: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13917.displayName = 'HeavyComponent13917';
export default HeavyComponent13917;
