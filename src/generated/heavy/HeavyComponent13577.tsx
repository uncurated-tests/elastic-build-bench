'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13577<T> = T extends (infer U)[]
  ? DeepReadonlyArray13577<U>
  : T extends object
  ? DeepReadonlyObject13577<T>
  : T;

interface DeepReadonlyArray13577<T> extends ReadonlyArray<DeepReadonly13577<T>> {}

type DeepReadonlyObject13577<T> = {
  readonly [P in keyof T]: DeepReadonly13577<T[P]>;
};

type UnionToIntersection13577<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13577<T> = UnionToIntersection13577<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13577<T extends unknown[], V> = [...T, V];

type TuplifyUnion13577<T, L = LastOf13577<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13577<TuplifyUnion13577<Exclude<T, L>>, L>;

type DeepPartial13577<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13577<T[P]> }
  : T;

type Paths13577<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13577<K, Paths13577<T[K], Prev13577[D]>> : never }[keyof T]
  : never;

type Prev13577 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13577<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13577 {
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

type ConfigPaths13577 = Paths13577<NestedConfig13577>;

interface HeavyProps13577 {
  config: DeepPartial13577<NestedConfig13577>;
  path?: ConfigPaths13577;
}

const HeavyComponent13577 = memo(function HeavyComponent13577({ config }: HeavyProps13577) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13577) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13577 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13577: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13577.displayName = 'HeavyComponent13577';
export default HeavyComponent13577;
