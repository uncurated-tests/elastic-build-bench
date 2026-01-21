'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13881<T> = T extends (infer U)[]
  ? DeepReadonlyArray13881<U>
  : T extends object
  ? DeepReadonlyObject13881<T>
  : T;

interface DeepReadonlyArray13881<T> extends ReadonlyArray<DeepReadonly13881<T>> {}

type DeepReadonlyObject13881<T> = {
  readonly [P in keyof T]: DeepReadonly13881<T[P]>;
};

type UnionToIntersection13881<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13881<T> = UnionToIntersection13881<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13881<T extends unknown[], V> = [...T, V];

type TuplifyUnion13881<T, L = LastOf13881<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13881<TuplifyUnion13881<Exclude<T, L>>, L>;

type DeepPartial13881<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13881<T[P]> }
  : T;

type Paths13881<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13881<K, Paths13881<T[K], Prev13881[D]>> : never }[keyof T]
  : never;

type Prev13881 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13881<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13881 {
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

type ConfigPaths13881 = Paths13881<NestedConfig13881>;

interface HeavyProps13881 {
  config: DeepPartial13881<NestedConfig13881>;
  path?: ConfigPaths13881;
}

const HeavyComponent13881 = memo(function HeavyComponent13881({ config }: HeavyProps13881) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13881) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13881 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13881: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13881.displayName = 'HeavyComponent13881';
export default HeavyComponent13881;
