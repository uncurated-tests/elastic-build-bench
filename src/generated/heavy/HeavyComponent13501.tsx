'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13501<T> = T extends (infer U)[]
  ? DeepReadonlyArray13501<U>
  : T extends object
  ? DeepReadonlyObject13501<T>
  : T;

interface DeepReadonlyArray13501<T> extends ReadonlyArray<DeepReadonly13501<T>> {}

type DeepReadonlyObject13501<T> = {
  readonly [P in keyof T]: DeepReadonly13501<T[P]>;
};

type UnionToIntersection13501<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13501<T> = UnionToIntersection13501<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13501<T extends unknown[], V> = [...T, V];

type TuplifyUnion13501<T, L = LastOf13501<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13501<TuplifyUnion13501<Exclude<T, L>>, L>;

type DeepPartial13501<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13501<T[P]> }
  : T;

type Paths13501<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13501<K, Paths13501<T[K], Prev13501[D]>> : never }[keyof T]
  : never;

type Prev13501 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13501<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13501 {
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

type ConfigPaths13501 = Paths13501<NestedConfig13501>;

interface HeavyProps13501 {
  config: DeepPartial13501<NestedConfig13501>;
  path?: ConfigPaths13501;
}

const HeavyComponent13501 = memo(function HeavyComponent13501({ config }: HeavyProps13501) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13501) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13501 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13501: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13501.displayName = 'HeavyComponent13501';
export default HeavyComponent13501;
