'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13584<T> = T extends (infer U)[]
  ? DeepReadonlyArray13584<U>
  : T extends object
  ? DeepReadonlyObject13584<T>
  : T;

interface DeepReadonlyArray13584<T> extends ReadonlyArray<DeepReadonly13584<T>> {}

type DeepReadonlyObject13584<T> = {
  readonly [P in keyof T]: DeepReadonly13584<T[P]>;
};

type UnionToIntersection13584<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13584<T> = UnionToIntersection13584<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13584<T extends unknown[], V> = [...T, V];

type TuplifyUnion13584<T, L = LastOf13584<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13584<TuplifyUnion13584<Exclude<T, L>>, L>;

type DeepPartial13584<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13584<T[P]> }
  : T;

type Paths13584<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13584<K, Paths13584<T[K], Prev13584[D]>> : never }[keyof T]
  : never;

type Prev13584 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13584<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13584 {
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

type ConfigPaths13584 = Paths13584<NestedConfig13584>;

interface HeavyProps13584 {
  config: DeepPartial13584<NestedConfig13584>;
  path?: ConfigPaths13584;
}

const HeavyComponent13584 = memo(function HeavyComponent13584({ config }: HeavyProps13584) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13584) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13584 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13584: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13584.displayName = 'HeavyComponent13584';
export default HeavyComponent13584;
