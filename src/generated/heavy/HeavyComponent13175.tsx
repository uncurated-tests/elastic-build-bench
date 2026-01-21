'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13175<T> = T extends (infer U)[]
  ? DeepReadonlyArray13175<U>
  : T extends object
  ? DeepReadonlyObject13175<T>
  : T;

interface DeepReadonlyArray13175<T> extends ReadonlyArray<DeepReadonly13175<T>> {}

type DeepReadonlyObject13175<T> = {
  readonly [P in keyof T]: DeepReadonly13175<T[P]>;
};

type UnionToIntersection13175<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13175<T> = UnionToIntersection13175<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13175<T extends unknown[], V> = [...T, V];

type TuplifyUnion13175<T, L = LastOf13175<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13175<TuplifyUnion13175<Exclude<T, L>>, L>;

type DeepPartial13175<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13175<T[P]> }
  : T;

type Paths13175<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13175<K, Paths13175<T[K], Prev13175[D]>> : never }[keyof T]
  : never;

type Prev13175 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13175<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13175 {
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

type ConfigPaths13175 = Paths13175<NestedConfig13175>;

interface HeavyProps13175 {
  config: DeepPartial13175<NestedConfig13175>;
  path?: ConfigPaths13175;
}

const HeavyComponent13175 = memo(function HeavyComponent13175({ config }: HeavyProps13175) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13175) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13175 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13175: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13175.displayName = 'HeavyComponent13175';
export default HeavyComponent13175;
