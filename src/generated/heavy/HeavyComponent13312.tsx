'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13312<T> = T extends (infer U)[]
  ? DeepReadonlyArray13312<U>
  : T extends object
  ? DeepReadonlyObject13312<T>
  : T;

interface DeepReadonlyArray13312<T> extends ReadonlyArray<DeepReadonly13312<T>> {}

type DeepReadonlyObject13312<T> = {
  readonly [P in keyof T]: DeepReadonly13312<T[P]>;
};

type UnionToIntersection13312<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13312<T> = UnionToIntersection13312<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13312<T extends unknown[], V> = [...T, V];

type TuplifyUnion13312<T, L = LastOf13312<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13312<TuplifyUnion13312<Exclude<T, L>>, L>;

type DeepPartial13312<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13312<T[P]> }
  : T;

type Paths13312<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13312<K, Paths13312<T[K], Prev13312[D]>> : never }[keyof T]
  : never;

type Prev13312 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13312<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13312 {
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

type ConfigPaths13312 = Paths13312<NestedConfig13312>;

interface HeavyProps13312 {
  config: DeepPartial13312<NestedConfig13312>;
  path?: ConfigPaths13312;
}

const HeavyComponent13312 = memo(function HeavyComponent13312({ config }: HeavyProps13312) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13312) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13312 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13312: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13312.displayName = 'HeavyComponent13312';
export default HeavyComponent13312;
