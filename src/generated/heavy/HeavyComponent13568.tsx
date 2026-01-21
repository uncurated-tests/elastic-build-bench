'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13568<T> = T extends (infer U)[]
  ? DeepReadonlyArray13568<U>
  : T extends object
  ? DeepReadonlyObject13568<T>
  : T;

interface DeepReadonlyArray13568<T> extends ReadonlyArray<DeepReadonly13568<T>> {}

type DeepReadonlyObject13568<T> = {
  readonly [P in keyof T]: DeepReadonly13568<T[P]>;
};

type UnionToIntersection13568<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13568<T> = UnionToIntersection13568<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13568<T extends unknown[], V> = [...T, V];

type TuplifyUnion13568<T, L = LastOf13568<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13568<TuplifyUnion13568<Exclude<T, L>>, L>;

type DeepPartial13568<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13568<T[P]> }
  : T;

type Paths13568<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13568<K, Paths13568<T[K], Prev13568[D]>> : never }[keyof T]
  : never;

type Prev13568 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13568<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13568 {
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

type ConfigPaths13568 = Paths13568<NestedConfig13568>;

interface HeavyProps13568 {
  config: DeepPartial13568<NestedConfig13568>;
  path?: ConfigPaths13568;
}

const HeavyComponent13568 = memo(function HeavyComponent13568({ config }: HeavyProps13568) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13568) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13568 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13568: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13568.displayName = 'HeavyComponent13568';
export default HeavyComponent13568;
