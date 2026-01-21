'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13130<T> = T extends (infer U)[]
  ? DeepReadonlyArray13130<U>
  : T extends object
  ? DeepReadonlyObject13130<T>
  : T;

interface DeepReadonlyArray13130<T> extends ReadonlyArray<DeepReadonly13130<T>> {}

type DeepReadonlyObject13130<T> = {
  readonly [P in keyof T]: DeepReadonly13130<T[P]>;
};

type UnionToIntersection13130<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13130<T> = UnionToIntersection13130<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13130<T extends unknown[], V> = [...T, V];

type TuplifyUnion13130<T, L = LastOf13130<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13130<TuplifyUnion13130<Exclude<T, L>>, L>;

type DeepPartial13130<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13130<T[P]> }
  : T;

type Paths13130<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13130<K, Paths13130<T[K], Prev13130[D]>> : never }[keyof T]
  : never;

type Prev13130 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13130<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13130 {
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

type ConfigPaths13130 = Paths13130<NestedConfig13130>;

interface HeavyProps13130 {
  config: DeepPartial13130<NestedConfig13130>;
  path?: ConfigPaths13130;
}

const HeavyComponent13130 = memo(function HeavyComponent13130({ config }: HeavyProps13130) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13130) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13130 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13130: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13130.displayName = 'HeavyComponent13130';
export default HeavyComponent13130;
