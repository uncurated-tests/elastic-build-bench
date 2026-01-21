'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13797<T> = T extends (infer U)[]
  ? DeepReadonlyArray13797<U>
  : T extends object
  ? DeepReadonlyObject13797<T>
  : T;

interface DeepReadonlyArray13797<T> extends ReadonlyArray<DeepReadonly13797<T>> {}

type DeepReadonlyObject13797<T> = {
  readonly [P in keyof T]: DeepReadonly13797<T[P]>;
};

type UnionToIntersection13797<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13797<T> = UnionToIntersection13797<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13797<T extends unknown[], V> = [...T, V];

type TuplifyUnion13797<T, L = LastOf13797<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13797<TuplifyUnion13797<Exclude<T, L>>, L>;

type DeepPartial13797<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13797<T[P]> }
  : T;

type Paths13797<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13797<K, Paths13797<T[K], Prev13797[D]>> : never }[keyof T]
  : never;

type Prev13797 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13797<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13797 {
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

type ConfigPaths13797 = Paths13797<NestedConfig13797>;

interface HeavyProps13797 {
  config: DeepPartial13797<NestedConfig13797>;
  path?: ConfigPaths13797;
}

const HeavyComponent13797 = memo(function HeavyComponent13797({ config }: HeavyProps13797) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13797) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13797 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13797: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13797.displayName = 'HeavyComponent13797';
export default HeavyComponent13797;
