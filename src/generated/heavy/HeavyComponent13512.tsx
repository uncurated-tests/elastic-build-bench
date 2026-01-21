'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13512<T> = T extends (infer U)[]
  ? DeepReadonlyArray13512<U>
  : T extends object
  ? DeepReadonlyObject13512<T>
  : T;

interface DeepReadonlyArray13512<T> extends ReadonlyArray<DeepReadonly13512<T>> {}

type DeepReadonlyObject13512<T> = {
  readonly [P in keyof T]: DeepReadonly13512<T[P]>;
};

type UnionToIntersection13512<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13512<T> = UnionToIntersection13512<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13512<T extends unknown[], V> = [...T, V];

type TuplifyUnion13512<T, L = LastOf13512<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13512<TuplifyUnion13512<Exclude<T, L>>, L>;

type DeepPartial13512<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13512<T[P]> }
  : T;

type Paths13512<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13512<K, Paths13512<T[K], Prev13512[D]>> : never }[keyof T]
  : never;

type Prev13512 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13512<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13512 {
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

type ConfigPaths13512 = Paths13512<NestedConfig13512>;

interface HeavyProps13512 {
  config: DeepPartial13512<NestedConfig13512>;
  path?: ConfigPaths13512;
}

const HeavyComponent13512 = memo(function HeavyComponent13512({ config }: HeavyProps13512) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13512) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13512 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13512: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13512.displayName = 'HeavyComponent13512';
export default HeavyComponent13512;
