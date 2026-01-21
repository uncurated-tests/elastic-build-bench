'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13234<T> = T extends (infer U)[]
  ? DeepReadonlyArray13234<U>
  : T extends object
  ? DeepReadonlyObject13234<T>
  : T;

interface DeepReadonlyArray13234<T> extends ReadonlyArray<DeepReadonly13234<T>> {}

type DeepReadonlyObject13234<T> = {
  readonly [P in keyof T]: DeepReadonly13234<T[P]>;
};

type UnionToIntersection13234<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13234<T> = UnionToIntersection13234<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13234<T extends unknown[], V> = [...T, V];

type TuplifyUnion13234<T, L = LastOf13234<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13234<TuplifyUnion13234<Exclude<T, L>>, L>;

type DeepPartial13234<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13234<T[P]> }
  : T;

type Paths13234<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13234<K, Paths13234<T[K], Prev13234[D]>> : never }[keyof T]
  : never;

type Prev13234 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13234<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13234 {
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

type ConfigPaths13234 = Paths13234<NestedConfig13234>;

interface HeavyProps13234 {
  config: DeepPartial13234<NestedConfig13234>;
  path?: ConfigPaths13234;
}

const HeavyComponent13234 = memo(function HeavyComponent13234({ config }: HeavyProps13234) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13234) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13234 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13234: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13234.displayName = 'HeavyComponent13234';
export default HeavyComponent13234;
