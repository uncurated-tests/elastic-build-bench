'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13314<T> = T extends (infer U)[]
  ? DeepReadonlyArray13314<U>
  : T extends object
  ? DeepReadonlyObject13314<T>
  : T;

interface DeepReadonlyArray13314<T> extends ReadonlyArray<DeepReadonly13314<T>> {}

type DeepReadonlyObject13314<T> = {
  readonly [P in keyof T]: DeepReadonly13314<T[P]>;
};

type UnionToIntersection13314<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13314<T> = UnionToIntersection13314<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13314<T extends unknown[], V> = [...T, V];

type TuplifyUnion13314<T, L = LastOf13314<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13314<TuplifyUnion13314<Exclude<T, L>>, L>;

type DeepPartial13314<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13314<T[P]> }
  : T;

type Paths13314<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13314<K, Paths13314<T[K], Prev13314[D]>> : never }[keyof T]
  : never;

type Prev13314 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13314<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13314 {
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

type ConfigPaths13314 = Paths13314<NestedConfig13314>;

interface HeavyProps13314 {
  config: DeepPartial13314<NestedConfig13314>;
  path?: ConfigPaths13314;
}

const HeavyComponent13314 = memo(function HeavyComponent13314({ config }: HeavyProps13314) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13314) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13314 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13314: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13314.displayName = 'HeavyComponent13314';
export default HeavyComponent13314;
