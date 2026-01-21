'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13117<T> = T extends (infer U)[]
  ? DeepReadonlyArray13117<U>
  : T extends object
  ? DeepReadonlyObject13117<T>
  : T;

interface DeepReadonlyArray13117<T> extends ReadonlyArray<DeepReadonly13117<T>> {}

type DeepReadonlyObject13117<T> = {
  readonly [P in keyof T]: DeepReadonly13117<T[P]>;
};

type UnionToIntersection13117<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13117<T> = UnionToIntersection13117<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13117<T extends unknown[], V> = [...T, V];

type TuplifyUnion13117<T, L = LastOf13117<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13117<TuplifyUnion13117<Exclude<T, L>>, L>;

type DeepPartial13117<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13117<T[P]> }
  : T;

type Paths13117<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13117<K, Paths13117<T[K], Prev13117[D]>> : never }[keyof T]
  : never;

type Prev13117 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13117<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13117 {
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

type ConfigPaths13117 = Paths13117<NestedConfig13117>;

interface HeavyProps13117 {
  config: DeepPartial13117<NestedConfig13117>;
  path?: ConfigPaths13117;
}

const HeavyComponent13117 = memo(function HeavyComponent13117({ config }: HeavyProps13117) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13117) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13117 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13117: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13117.displayName = 'HeavyComponent13117';
export default HeavyComponent13117;
