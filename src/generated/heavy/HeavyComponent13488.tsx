'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13488<T> = T extends (infer U)[]
  ? DeepReadonlyArray13488<U>
  : T extends object
  ? DeepReadonlyObject13488<T>
  : T;

interface DeepReadonlyArray13488<T> extends ReadonlyArray<DeepReadonly13488<T>> {}

type DeepReadonlyObject13488<T> = {
  readonly [P in keyof T]: DeepReadonly13488<T[P]>;
};

type UnionToIntersection13488<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13488<T> = UnionToIntersection13488<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13488<T extends unknown[], V> = [...T, V];

type TuplifyUnion13488<T, L = LastOf13488<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13488<TuplifyUnion13488<Exclude<T, L>>, L>;

type DeepPartial13488<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13488<T[P]> }
  : T;

type Paths13488<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13488<K, Paths13488<T[K], Prev13488[D]>> : never }[keyof T]
  : never;

type Prev13488 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13488<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13488 {
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

type ConfigPaths13488 = Paths13488<NestedConfig13488>;

interface HeavyProps13488 {
  config: DeepPartial13488<NestedConfig13488>;
  path?: ConfigPaths13488;
}

const HeavyComponent13488 = memo(function HeavyComponent13488({ config }: HeavyProps13488) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13488) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13488 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13488: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13488.displayName = 'HeavyComponent13488';
export default HeavyComponent13488;
