'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13414<T> = T extends (infer U)[]
  ? DeepReadonlyArray13414<U>
  : T extends object
  ? DeepReadonlyObject13414<T>
  : T;

interface DeepReadonlyArray13414<T> extends ReadonlyArray<DeepReadonly13414<T>> {}

type DeepReadonlyObject13414<T> = {
  readonly [P in keyof T]: DeepReadonly13414<T[P]>;
};

type UnionToIntersection13414<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13414<T> = UnionToIntersection13414<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13414<T extends unknown[], V> = [...T, V];

type TuplifyUnion13414<T, L = LastOf13414<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13414<TuplifyUnion13414<Exclude<T, L>>, L>;

type DeepPartial13414<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13414<T[P]> }
  : T;

type Paths13414<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13414<K, Paths13414<T[K], Prev13414[D]>> : never }[keyof T]
  : never;

type Prev13414 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13414<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13414 {
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

type ConfigPaths13414 = Paths13414<NestedConfig13414>;

interface HeavyProps13414 {
  config: DeepPartial13414<NestedConfig13414>;
  path?: ConfigPaths13414;
}

const HeavyComponent13414 = memo(function HeavyComponent13414({ config }: HeavyProps13414) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13414) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13414 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13414: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13414.displayName = 'HeavyComponent13414';
export default HeavyComponent13414;
