'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13268<T> = T extends (infer U)[]
  ? DeepReadonlyArray13268<U>
  : T extends object
  ? DeepReadonlyObject13268<T>
  : T;

interface DeepReadonlyArray13268<T> extends ReadonlyArray<DeepReadonly13268<T>> {}

type DeepReadonlyObject13268<T> = {
  readonly [P in keyof T]: DeepReadonly13268<T[P]>;
};

type UnionToIntersection13268<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13268<T> = UnionToIntersection13268<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13268<T extends unknown[], V> = [...T, V];

type TuplifyUnion13268<T, L = LastOf13268<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13268<TuplifyUnion13268<Exclude<T, L>>, L>;

type DeepPartial13268<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13268<T[P]> }
  : T;

type Paths13268<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13268<K, Paths13268<T[K], Prev13268[D]>> : never }[keyof T]
  : never;

type Prev13268 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13268<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13268 {
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

type ConfigPaths13268 = Paths13268<NestedConfig13268>;

interface HeavyProps13268 {
  config: DeepPartial13268<NestedConfig13268>;
  path?: ConfigPaths13268;
}

const HeavyComponent13268 = memo(function HeavyComponent13268({ config }: HeavyProps13268) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13268) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13268 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13268: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13268.displayName = 'HeavyComponent13268';
export default HeavyComponent13268;
