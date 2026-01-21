'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13971<T> = T extends (infer U)[]
  ? DeepReadonlyArray13971<U>
  : T extends object
  ? DeepReadonlyObject13971<T>
  : T;

interface DeepReadonlyArray13971<T> extends ReadonlyArray<DeepReadonly13971<T>> {}

type DeepReadonlyObject13971<T> = {
  readonly [P in keyof T]: DeepReadonly13971<T[P]>;
};

type UnionToIntersection13971<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13971<T> = UnionToIntersection13971<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13971<T extends unknown[], V> = [...T, V];

type TuplifyUnion13971<T, L = LastOf13971<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13971<TuplifyUnion13971<Exclude<T, L>>, L>;

type DeepPartial13971<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13971<T[P]> }
  : T;

type Paths13971<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13971<K, Paths13971<T[K], Prev13971[D]>> : never }[keyof T]
  : never;

type Prev13971 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13971<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13971 {
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

type ConfigPaths13971 = Paths13971<NestedConfig13971>;

interface HeavyProps13971 {
  config: DeepPartial13971<NestedConfig13971>;
  path?: ConfigPaths13971;
}

const HeavyComponent13971 = memo(function HeavyComponent13971({ config }: HeavyProps13971) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13971) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13971 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13971: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13971.displayName = 'HeavyComponent13971';
export default HeavyComponent13971;
