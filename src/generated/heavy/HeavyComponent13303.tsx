'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13303<T> = T extends (infer U)[]
  ? DeepReadonlyArray13303<U>
  : T extends object
  ? DeepReadonlyObject13303<T>
  : T;

interface DeepReadonlyArray13303<T> extends ReadonlyArray<DeepReadonly13303<T>> {}

type DeepReadonlyObject13303<T> = {
  readonly [P in keyof T]: DeepReadonly13303<T[P]>;
};

type UnionToIntersection13303<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13303<T> = UnionToIntersection13303<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13303<T extends unknown[], V> = [...T, V];

type TuplifyUnion13303<T, L = LastOf13303<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13303<TuplifyUnion13303<Exclude<T, L>>, L>;

type DeepPartial13303<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13303<T[P]> }
  : T;

type Paths13303<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13303<K, Paths13303<T[K], Prev13303[D]>> : never }[keyof T]
  : never;

type Prev13303 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13303<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13303 {
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

type ConfigPaths13303 = Paths13303<NestedConfig13303>;

interface HeavyProps13303 {
  config: DeepPartial13303<NestedConfig13303>;
  path?: ConfigPaths13303;
}

const HeavyComponent13303 = memo(function HeavyComponent13303({ config }: HeavyProps13303) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13303) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13303 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13303: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13303.displayName = 'HeavyComponent13303';
export default HeavyComponent13303;
