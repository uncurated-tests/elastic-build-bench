'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13365<T> = T extends (infer U)[]
  ? DeepReadonlyArray13365<U>
  : T extends object
  ? DeepReadonlyObject13365<T>
  : T;

interface DeepReadonlyArray13365<T> extends ReadonlyArray<DeepReadonly13365<T>> {}

type DeepReadonlyObject13365<T> = {
  readonly [P in keyof T]: DeepReadonly13365<T[P]>;
};

type UnionToIntersection13365<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13365<T> = UnionToIntersection13365<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13365<T extends unknown[], V> = [...T, V];

type TuplifyUnion13365<T, L = LastOf13365<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13365<TuplifyUnion13365<Exclude<T, L>>, L>;

type DeepPartial13365<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13365<T[P]> }
  : T;

type Paths13365<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13365<K, Paths13365<T[K], Prev13365[D]>> : never }[keyof T]
  : never;

type Prev13365 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13365<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13365 {
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

type ConfigPaths13365 = Paths13365<NestedConfig13365>;

interface HeavyProps13365 {
  config: DeepPartial13365<NestedConfig13365>;
  path?: ConfigPaths13365;
}

const HeavyComponent13365 = memo(function HeavyComponent13365({ config }: HeavyProps13365) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13365) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13365 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13365: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13365.displayName = 'HeavyComponent13365';
export default HeavyComponent13365;
