'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13682<T> = T extends (infer U)[]
  ? DeepReadonlyArray13682<U>
  : T extends object
  ? DeepReadonlyObject13682<T>
  : T;

interface DeepReadonlyArray13682<T> extends ReadonlyArray<DeepReadonly13682<T>> {}

type DeepReadonlyObject13682<T> = {
  readonly [P in keyof T]: DeepReadonly13682<T[P]>;
};

type UnionToIntersection13682<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13682<T> = UnionToIntersection13682<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13682<T extends unknown[], V> = [...T, V];

type TuplifyUnion13682<T, L = LastOf13682<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13682<TuplifyUnion13682<Exclude<T, L>>, L>;

type DeepPartial13682<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13682<T[P]> }
  : T;

type Paths13682<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13682<K, Paths13682<T[K], Prev13682[D]>> : never }[keyof T]
  : never;

type Prev13682 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13682<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13682 {
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

type ConfigPaths13682 = Paths13682<NestedConfig13682>;

interface HeavyProps13682 {
  config: DeepPartial13682<NestedConfig13682>;
  path?: ConfigPaths13682;
}

const HeavyComponent13682 = memo(function HeavyComponent13682({ config }: HeavyProps13682) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13682) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13682 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13682: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13682.displayName = 'HeavyComponent13682';
export default HeavyComponent13682;
