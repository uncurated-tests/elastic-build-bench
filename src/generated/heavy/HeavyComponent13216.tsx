'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13216<T> = T extends (infer U)[]
  ? DeepReadonlyArray13216<U>
  : T extends object
  ? DeepReadonlyObject13216<T>
  : T;

interface DeepReadonlyArray13216<T> extends ReadonlyArray<DeepReadonly13216<T>> {}

type DeepReadonlyObject13216<T> = {
  readonly [P in keyof T]: DeepReadonly13216<T[P]>;
};

type UnionToIntersection13216<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13216<T> = UnionToIntersection13216<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13216<T extends unknown[], V> = [...T, V];

type TuplifyUnion13216<T, L = LastOf13216<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13216<TuplifyUnion13216<Exclude<T, L>>, L>;

type DeepPartial13216<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13216<T[P]> }
  : T;

type Paths13216<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13216<K, Paths13216<T[K], Prev13216[D]>> : never }[keyof T]
  : never;

type Prev13216 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13216<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13216 {
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

type ConfigPaths13216 = Paths13216<NestedConfig13216>;

interface HeavyProps13216 {
  config: DeepPartial13216<NestedConfig13216>;
  path?: ConfigPaths13216;
}

const HeavyComponent13216 = memo(function HeavyComponent13216({ config }: HeavyProps13216) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13216) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13216 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13216: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13216.displayName = 'HeavyComponent13216';
export default HeavyComponent13216;
