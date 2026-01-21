'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13499<T> = T extends (infer U)[]
  ? DeepReadonlyArray13499<U>
  : T extends object
  ? DeepReadonlyObject13499<T>
  : T;

interface DeepReadonlyArray13499<T> extends ReadonlyArray<DeepReadonly13499<T>> {}

type DeepReadonlyObject13499<T> = {
  readonly [P in keyof T]: DeepReadonly13499<T[P]>;
};

type UnionToIntersection13499<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13499<T> = UnionToIntersection13499<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13499<T extends unknown[], V> = [...T, V];

type TuplifyUnion13499<T, L = LastOf13499<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13499<TuplifyUnion13499<Exclude<T, L>>, L>;

type DeepPartial13499<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13499<T[P]> }
  : T;

type Paths13499<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13499<K, Paths13499<T[K], Prev13499[D]>> : never }[keyof T]
  : never;

type Prev13499 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13499<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13499 {
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

type ConfigPaths13499 = Paths13499<NestedConfig13499>;

interface HeavyProps13499 {
  config: DeepPartial13499<NestedConfig13499>;
  path?: ConfigPaths13499;
}

const HeavyComponent13499 = memo(function HeavyComponent13499({ config }: HeavyProps13499) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13499) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13499 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13499: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13499.displayName = 'HeavyComponent13499';
export default HeavyComponent13499;
