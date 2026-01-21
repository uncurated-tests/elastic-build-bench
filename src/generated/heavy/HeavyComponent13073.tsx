'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13073<T> = T extends (infer U)[]
  ? DeepReadonlyArray13073<U>
  : T extends object
  ? DeepReadonlyObject13073<T>
  : T;

interface DeepReadonlyArray13073<T> extends ReadonlyArray<DeepReadonly13073<T>> {}

type DeepReadonlyObject13073<T> = {
  readonly [P in keyof T]: DeepReadonly13073<T[P]>;
};

type UnionToIntersection13073<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13073<T> = UnionToIntersection13073<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13073<T extends unknown[], V> = [...T, V];

type TuplifyUnion13073<T, L = LastOf13073<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13073<TuplifyUnion13073<Exclude<T, L>>, L>;

type DeepPartial13073<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13073<T[P]> }
  : T;

type Paths13073<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13073<K, Paths13073<T[K], Prev13073[D]>> : never }[keyof T]
  : never;

type Prev13073 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13073<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13073 {
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

type ConfigPaths13073 = Paths13073<NestedConfig13073>;

interface HeavyProps13073 {
  config: DeepPartial13073<NestedConfig13073>;
  path?: ConfigPaths13073;
}

const HeavyComponent13073 = memo(function HeavyComponent13073({ config }: HeavyProps13073) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13073) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13073 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13073: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13073.displayName = 'HeavyComponent13073';
export default HeavyComponent13073;
