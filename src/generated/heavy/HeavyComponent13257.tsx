'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13257<T> = T extends (infer U)[]
  ? DeepReadonlyArray13257<U>
  : T extends object
  ? DeepReadonlyObject13257<T>
  : T;

interface DeepReadonlyArray13257<T> extends ReadonlyArray<DeepReadonly13257<T>> {}

type DeepReadonlyObject13257<T> = {
  readonly [P in keyof T]: DeepReadonly13257<T[P]>;
};

type UnionToIntersection13257<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13257<T> = UnionToIntersection13257<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13257<T extends unknown[], V> = [...T, V];

type TuplifyUnion13257<T, L = LastOf13257<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13257<TuplifyUnion13257<Exclude<T, L>>, L>;

type DeepPartial13257<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13257<T[P]> }
  : T;

type Paths13257<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13257<K, Paths13257<T[K], Prev13257[D]>> : never }[keyof T]
  : never;

type Prev13257 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13257<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13257 {
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

type ConfigPaths13257 = Paths13257<NestedConfig13257>;

interface HeavyProps13257 {
  config: DeepPartial13257<NestedConfig13257>;
  path?: ConfigPaths13257;
}

const HeavyComponent13257 = memo(function HeavyComponent13257({ config }: HeavyProps13257) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13257) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13257 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13257: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13257.displayName = 'HeavyComponent13257';
export default HeavyComponent13257;
