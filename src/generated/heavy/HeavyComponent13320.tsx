'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13320<T> = T extends (infer U)[]
  ? DeepReadonlyArray13320<U>
  : T extends object
  ? DeepReadonlyObject13320<T>
  : T;

interface DeepReadonlyArray13320<T> extends ReadonlyArray<DeepReadonly13320<T>> {}

type DeepReadonlyObject13320<T> = {
  readonly [P in keyof T]: DeepReadonly13320<T[P]>;
};

type UnionToIntersection13320<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13320<T> = UnionToIntersection13320<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13320<T extends unknown[], V> = [...T, V];

type TuplifyUnion13320<T, L = LastOf13320<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13320<TuplifyUnion13320<Exclude<T, L>>, L>;

type DeepPartial13320<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13320<T[P]> }
  : T;

type Paths13320<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13320<K, Paths13320<T[K], Prev13320[D]>> : never }[keyof T]
  : never;

type Prev13320 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13320<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13320 {
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

type ConfigPaths13320 = Paths13320<NestedConfig13320>;

interface HeavyProps13320 {
  config: DeepPartial13320<NestedConfig13320>;
  path?: ConfigPaths13320;
}

const HeavyComponent13320 = memo(function HeavyComponent13320({ config }: HeavyProps13320) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13320) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13320 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13320: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13320.displayName = 'HeavyComponent13320';
export default HeavyComponent13320;
