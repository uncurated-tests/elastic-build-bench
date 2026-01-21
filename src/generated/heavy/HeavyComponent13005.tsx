'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13005<T> = T extends (infer U)[]
  ? DeepReadonlyArray13005<U>
  : T extends object
  ? DeepReadonlyObject13005<T>
  : T;

interface DeepReadonlyArray13005<T> extends ReadonlyArray<DeepReadonly13005<T>> {}

type DeepReadonlyObject13005<T> = {
  readonly [P in keyof T]: DeepReadonly13005<T[P]>;
};

type UnionToIntersection13005<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13005<T> = UnionToIntersection13005<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13005<T extends unknown[], V> = [...T, V];

type TuplifyUnion13005<T, L = LastOf13005<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13005<TuplifyUnion13005<Exclude<T, L>>, L>;

type DeepPartial13005<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13005<T[P]> }
  : T;

type Paths13005<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13005<K, Paths13005<T[K], Prev13005[D]>> : never }[keyof T]
  : never;

type Prev13005 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13005<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13005 {
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

type ConfigPaths13005 = Paths13005<NestedConfig13005>;

interface HeavyProps13005 {
  config: DeepPartial13005<NestedConfig13005>;
  path?: ConfigPaths13005;
}

const HeavyComponent13005 = memo(function HeavyComponent13005({ config }: HeavyProps13005) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13005) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13005 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13005: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13005.displayName = 'HeavyComponent13005';
export default HeavyComponent13005;
