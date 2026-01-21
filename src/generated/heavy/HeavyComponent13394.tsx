'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13394<T> = T extends (infer U)[]
  ? DeepReadonlyArray13394<U>
  : T extends object
  ? DeepReadonlyObject13394<T>
  : T;

interface DeepReadonlyArray13394<T> extends ReadonlyArray<DeepReadonly13394<T>> {}

type DeepReadonlyObject13394<T> = {
  readonly [P in keyof T]: DeepReadonly13394<T[P]>;
};

type UnionToIntersection13394<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13394<T> = UnionToIntersection13394<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13394<T extends unknown[], V> = [...T, V];

type TuplifyUnion13394<T, L = LastOf13394<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13394<TuplifyUnion13394<Exclude<T, L>>, L>;

type DeepPartial13394<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13394<T[P]> }
  : T;

type Paths13394<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13394<K, Paths13394<T[K], Prev13394[D]>> : never }[keyof T]
  : never;

type Prev13394 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13394<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13394 {
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

type ConfigPaths13394 = Paths13394<NestedConfig13394>;

interface HeavyProps13394 {
  config: DeepPartial13394<NestedConfig13394>;
  path?: ConfigPaths13394;
}

const HeavyComponent13394 = memo(function HeavyComponent13394({ config }: HeavyProps13394) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13394) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13394 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13394: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13394.displayName = 'HeavyComponent13394';
export default HeavyComponent13394;
