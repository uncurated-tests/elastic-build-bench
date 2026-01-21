'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13391<T> = T extends (infer U)[]
  ? DeepReadonlyArray13391<U>
  : T extends object
  ? DeepReadonlyObject13391<T>
  : T;

interface DeepReadonlyArray13391<T> extends ReadonlyArray<DeepReadonly13391<T>> {}

type DeepReadonlyObject13391<T> = {
  readonly [P in keyof T]: DeepReadonly13391<T[P]>;
};

type UnionToIntersection13391<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13391<T> = UnionToIntersection13391<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13391<T extends unknown[], V> = [...T, V];

type TuplifyUnion13391<T, L = LastOf13391<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13391<TuplifyUnion13391<Exclude<T, L>>, L>;

type DeepPartial13391<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13391<T[P]> }
  : T;

type Paths13391<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13391<K, Paths13391<T[K], Prev13391[D]>> : never }[keyof T]
  : never;

type Prev13391 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13391<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13391 {
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

type ConfigPaths13391 = Paths13391<NestedConfig13391>;

interface HeavyProps13391 {
  config: DeepPartial13391<NestedConfig13391>;
  path?: ConfigPaths13391;
}

const HeavyComponent13391 = memo(function HeavyComponent13391({ config }: HeavyProps13391) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13391) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13391 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13391: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13391.displayName = 'HeavyComponent13391';
export default HeavyComponent13391;
