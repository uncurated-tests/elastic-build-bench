'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13416<T> = T extends (infer U)[]
  ? DeepReadonlyArray13416<U>
  : T extends object
  ? DeepReadonlyObject13416<T>
  : T;

interface DeepReadonlyArray13416<T> extends ReadonlyArray<DeepReadonly13416<T>> {}

type DeepReadonlyObject13416<T> = {
  readonly [P in keyof T]: DeepReadonly13416<T[P]>;
};

type UnionToIntersection13416<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13416<T> = UnionToIntersection13416<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13416<T extends unknown[], V> = [...T, V];

type TuplifyUnion13416<T, L = LastOf13416<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13416<TuplifyUnion13416<Exclude<T, L>>, L>;

type DeepPartial13416<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13416<T[P]> }
  : T;

type Paths13416<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13416<K, Paths13416<T[K], Prev13416[D]>> : never }[keyof T]
  : never;

type Prev13416 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13416<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13416 {
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

type ConfigPaths13416 = Paths13416<NestedConfig13416>;

interface HeavyProps13416 {
  config: DeepPartial13416<NestedConfig13416>;
  path?: ConfigPaths13416;
}

const HeavyComponent13416 = memo(function HeavyComponent13416({ config }: HeavyProps13416) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13416) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13416 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13416: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13416.displayName = 'HeavyComponent13416';
export default HeavyComponent13416;
