'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13290<T> = T extends (infer U)[]
  ? DeepReadonlyArray13290<U>
  : T extends object
  ? DeepReadonlyObject13290<T>
  : T;

interface DeepReadonlyArray13290<T> extends ReadonlyArray<DeepReadonly13290<T>> {}

type DeepReadonlyObject13290<T> = {
  readonly [P in keyof T]: DeepReadonly13290<T[P]>;
};

type UnionToIntersection13290<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13290<T> = UnionToIntersection13290<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13290<T extends unknown[], V> = [...T, V];

type TuplifyUnion13290<T, L = LastOf13290<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13290<TuplifyUnion13290<Exclude<T, L>>, L>;

type DeepPartial13290<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13290<T[P]> }
  : T;

type Paths13290<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13290<K, Paths13290<T[K], Prev13290[D]>> : never }[keyof T]
  : never;

type Prev13290 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13290<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13290 {
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

type ConfigPaths13290 = Paths13290<NestedConfig13290>;

interface HeavyProps13290 {
  config: DeepPartial13290<NestedConfig13290>;
  path?: ConfigPaths13290;
}

const HeavyComponent13290 = memo(function HeavyComponent13290({ config }: HeavyProps13290) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13290) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13290 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13290: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13290.displayName = 'HeavyComponent13290';
export default HeavyComponent13290;
