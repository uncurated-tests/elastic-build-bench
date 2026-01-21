'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13197<T> = T extends (infer U)[]
  ? DeepReadonlyArray13197<U>
  : T extends object
  ? DeepReadonlyObject13197<T>
  : T;

interface DeepReadonlyArray13197<T> extends ReadonlyArray<DeepReadonly13197<T>> {}

type DeepReadonlyObject13197<T> = {
  readonly [P in keyof T]: DeepReadonly13197<T[P]>;
};

type UnionToIntersection13197<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13197<T> = UnionToIntersection13197<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13197<T extends unknown[], V> = [...T, V];

type TuplifyUnion13197<T, L = LastOf13197<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13197<TuplifyUnion13197<Exclude<T, L>>, L>;

type DeepPartial13197<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13197<T[P]> }
  : T;

type Paths13197<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13197<K, Paths13197<T[K], Prev13197[D]>> : never }[keyof T]
  : never;

type Prev13197 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13197<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13197 {
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

type ConfigPaths13197 = Paths13197<NestedConfig13197>;

interface HeavyProps13197 {
  config: DeepPartial13197<NestedConfig13197>;
  path?: ConfigPaths13197;
}

const HeavyComponent13197 = memo(function HeavyComponent13197({ config }: HeavyProps13197) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13197) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13197 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13197: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13197.displayName = 'HeavyComponent13197';
export default HeavyComponent13197;
