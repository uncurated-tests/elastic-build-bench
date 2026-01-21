'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13274<T> = T extends (infer U)[]
  ? DeepReadonlyArray13274<U>
  : T extends object
  ? DeepReadonlyObject13274<T>
  : T;

interface DeepReadonlyArray13274<T> extends ReadonlyArray<DeepReadonly13274<T>> {}

type DeepReadonlyObject13274<T> = {
  readonly [P in keyof T]: DeepReadonly13274<T[P]>;
};

type UnionToIntersection13274<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13274<T> = UnionToIntersection13274<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13274<T extends unknown[], V> = [...T, V];

type TuplifyUnion13274<T, L = LastOf13274<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13274<TuplifyUnion13274<Exclude<T, L>>, L>;

type DeepPartial13274<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13274<T[P]> }
  : T;

type Paths13274<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13274<K, Paths13274<T[K], Prev13274[D]>> : never }[keyof T]
  : never;

type Prev13274 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13274<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13274 {
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

type ConfigPaths13274 = Paths13274<NestedConfig13274>;

interface HeavyProps13274 {
  config: DeepPartial13274<NestedConfig13274>;
  path?: ConfigPaths13274;
}

const HeavyComponent13274 = memo(function HeavyComponent13274({ config }: HeavyProps13274) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13274) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13274 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13274: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13274.displayName = 'HeavyComponent13274';
export default HeavyComponent13274;
