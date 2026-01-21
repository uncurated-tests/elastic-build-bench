'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13443<T> = T extends (infer U)[]
  ? DeepReadonlyArray13443<U>
  : T extends object
  ? DeepReadonlyObject13443<T>
  : T;

interface DeepReadonlyArray13443<T> extends ReadonlyArray<DeepReadonly13443<T>> {}

type DeepReadonlyObject13443<T> = {
  readonly [P in keyof T]: DeepReadonly13443<T[P]>;
};

type UnionToIntersection13443<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13443<T> = UnionToIntersection13443<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13443<T extends unknown[], V> = [...T, V];

type TuplifyUnion13443<T, L = LastOf13443<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13443<TuplifyUnion13443<Exclude<T, L>>, L>;

type DeepPartial13443<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13443<T[P]> }
  : T;

type Paths13443<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13443<K, Paths13443<T[K], Prev13443[D]>> : never }[keyof T]
  : never;

type Prev13443 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13443<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13443 {
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

type ConfigPaths13443 = Paths13443<NestedConfig13443>;

interface HeavyProps13443 {
  config: DeepPartial13443<NestedConfig13443>;
  path?: ConfigPaths13443;
}

const HeavyComponent13443 = memo(function HeavyComponent13443({ config }: HeavyProps13443) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13443) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13443 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13443: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13443.displayName = 'HeavyComponent13443';
export default HeavyComponent13443;
