'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13279<T> = T extends (infer U)[]
  ? DeepReadonlyArray13279<U>
  : T extends object
  ? DeepReadonlyObject13279<T>
  : T;

interface DeepReadonlyArray13279<T> extends ReadonlyArray<DeepReadonly13279<T>> {}

type DeepReadonlyObject13279<T> = {
  readonly [P in keyof T]: DeepReadonly13279<T[P]>;
};

type UnionToIntersection13279<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13279<T> = UnionToIntersection13279<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13279<T extends unknown[], V> = [...T, V];

type TuplifyUnion13279<T, L = LastOf13279<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13279<TuplifyUnion13279<Exclude<T, L>>, L>;

type DeepPartial13279<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13279<T[P]> }
  : T;

type Paths13279<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13279<K, Paths13279<T[K], Prev13279[D]>> : never }[keyof T]
  : never;

type Prev13279 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13279<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13279 {
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

type ConfigPaths13279 = Paths13279<NestedConfig13279>;

interface HeavyProps13279 {
  config: DeepPartial13279<NestedConfig13279>;
  path?: ConfigPaths13279;
}

const HeavyComponent13279 = memo(function HeavyComponent13279({ config }: HeavyProps13279) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13279) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13279 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13279: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13279.displayName = 'HeavyComponent13279';
export default HeavyComponent13279;
