'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13886<T> = T extends (infer U)[]
  ? DeepReadonlyArray13886<U>
  : T extends object
  ? DeepReadonlyObject13886<T>
  : T;

interface DeepReadonlyArray13886<T> extends ReadonlyArray<DeepReadonly13886<T>> {}

type DeepReadonlyObject13886<T> = {
  readonly [P in keyof T]: DeepReadonly13886<T[P]>;
};

type UnionToIntersection13886<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13886<T> = UnionToIntersection13886<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13886<T extends unknown[], V> = [...T, V];

type TuplifyUnion13886<T, L = LastOf13886<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13886<TuplifyUnion13886<Exclude<T, L>>, L>;

type DeepPartial13886<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13886<T[P]> }
  : T;

type Paths13886<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13886<K, Paths13886<T[K], Prev13886[D]>> : never }[keyof T]
  : never;

type Prev13886 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13886<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13886 {
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

type ConfigPaths13886 = Paths13886<NestedConfig13886>;

interface HeavyProps13886 {
  config: DeepPartial13886<NestedConfig13886>;
  path?: ConfigPaths13886;
}

const HeavyComponent13886 = memo(function HeavyComponent13886({ config }: HeavyProps13886) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13886) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13886 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13886: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13886.displayName = 'HeavyComponent13886';
export default HeavyComponent13886;
