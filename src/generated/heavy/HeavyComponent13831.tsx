'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13831<T> = T extends (infer U)[]
  ? DeepReadonlyArray13831<U>
  : T extends object
  ? DeepReadonlyObject13831<T>
  : T;

interface DeepReadonlyArray13831<T> extends ReadonlyArray<DeepReadonly13831<T>> {}

type DeepReadonlyObject13831<T> = {
  readonly [P in keyof T]: DeepReadonly13831<T[P]>;
};

type UnionToIntersection13831<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13831<T> = UnionToIntersection13831<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13831<T extends unknown[], V> = [...T, V];

type TuplifyUnion13831<T, L = LastOf13831<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13831<TuplifyUnion13831<Exclude<T, L>>, L>;

type DeepPartial13831<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13831<T[P]> }
  : T;

type Paths13831<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13831<K, Paths13831<T[K], Prev13831[D]>> : never }[keyof T]
  : never;

type Prev13831 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13831<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13831 {
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

type ConfigPaths13831 = Paths13831<NestedConfig13831>;

interface HeavyProps13831 {
  config: DeepPartial13831<NestedConfig13831>;
  path?: ConfigPaths13831;
}

const HeavyComponent13831 = memo(function HeavyComponent13831({ config }: HeavyProps13831) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13831) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13831 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13831: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13831.displayName = 'HeavyComponent13831';
export default HeavyComponent13831;
