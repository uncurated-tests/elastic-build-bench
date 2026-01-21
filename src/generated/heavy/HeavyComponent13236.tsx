'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13236<T> = T extends (infer U)[]
  ? DeepReadonlyArray13236<U>
  : T extends object
  ? DeepReadonlyObject13236<T>
  : T;

interface DeepReadonlyArray13236<T> extends ReadonlyArray<DeepReadonly13236<T>> {}

type DeepReadonlyObject13236<T> = {
  readonly [P in keyof T]: DeepReadonly13236<T[P]>;
};

type UnionToIntersection13236<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13236<T> = UnionToIntersection13236<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13236<T extends unknown[], V> = [...T, V];

type TuplifyUnion13236<T, L = LastOf13236<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13236<TuplifyUnion13236<Exclude<T, L>>, L>;

type DeepPartial13236<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13236<T[P]> }
  : T;

type Paths13236<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13236<K, Paths13236<T[K], Prev13236[D]>> : never }[keyof T]
  : never;

type Prev13236 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13236<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13236 {
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

type ConfigPaths13236 = Paths13236<NestedConfig13236>;

interface HeavyProps13236 {
  config: DeepPartial13236<NestedConfig13236>;
  path?: ConfigPaths13236;
}

const HeavyComponent13236 = memo(function HeavyComponent13236({ config }: HeavyProps13236) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13236) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13236 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13236: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13236.displayName = 'HeavyComponent13236';
export default HeavyComponent13236;
