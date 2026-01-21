'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13956<T> = T extends (infer U)[]
  ? DeepReadonlyArray13956<U>
  : T extends object
  ? DeepReadonlyObject13956<T>
  : T;

interface DeepReadonlyArray13956<T> extends ReadonlyArray<DeepReadonly13956<T>> {}

type DeepReadonlyObject13956<T> = {
  readonly [P in keyof T]: DeepReadonly13956<T[P]>;
};

type UnionToIntersection13956<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13956<T> = UnionToIntersection13956<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13956<T extends unknown[], V> = [...T, V];

type TuplifyUnion13956<T, L = LastOf13956<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13956<TuplifyUnion13956<Exclude<T, L>>, L>;

type DeepPartial13956<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13956<T[P]> }
  : T;

type Paths13956<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13956<K, Paths13956<T[K], Prev13956[D]>> : never }[keyof T]
  : never;

type Prev13956 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13956<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13956 {
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

type ConfigPaths13956 = Paths13956<NestedConfig13956>;

interface HeavyProps13956 {
  config: DeepPartial13956<NestedConfig13956>;
  path?: ConfigPaths13956;
}

const HeavyComponent13956 = memo(function HeavyComponent13956({ config }: HeavyProps13956) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13956) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13956 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13956: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13956.displayName = 'HeavyComponent13956';
export default HeavyComponent13956;
