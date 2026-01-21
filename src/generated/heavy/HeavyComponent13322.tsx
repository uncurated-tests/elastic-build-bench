'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13322<T> = T extends (infer U)[]
  ? DeepReadonlyArray13322<U>
  : T extends object
  ? DeepReadonlyObject13322<T>
  : T;

interface DeepReadonlyArray13322<T> extends ReadonlyArray<DeepReadonly13322<T>> {}

type DeepReadonlyObject13322<T> = {
  readonly [P in keyof T]: DeepReadonly13322<T[P]>;
};

type UnionToIntersection13322<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13322<T> = UnionToIntersection13322<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13322<T extends unknown[], V> = [...T, V];

type TuplifyUnion13322<T, L = LastOf13322<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13322<TuplifyUnion13322<Exclude<T, L>>, L>;

type DeepPartial13322<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13322<T[P]> }
  : T;

type Paths13322<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13322<K, Paths13322<T[K], Prev13322[D]>> : never }[keyof T]
  : never;

type Prev13322 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13322<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13322 {
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

type ConfigPaths13322 = Paths13322<NestedConfig13322>;

interface HeavyProps13322 {
  config: DeepPartial13322<NestedConfig13322>;
  path?: ConfigPaths13322;
}

const HeavyComponent13322 = memo(function HeavyComponent13322({ config }: HeavyProps13322) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13322) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13322 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13322: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13322.displayName = 'HeavyComponent13322';
export default HeavyComponent13322;
