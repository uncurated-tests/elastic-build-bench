'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13448<T> = T extends (infer U)[]
  ? DeepReadonlyArray13448<U>
  : T extends object
  ? DeepReadonlyObject13448<T>
  : T;

interface DeepReadonlyArray13448<T> extends ReadonlyArray<DeepReadonly13448<T>> {}

type DeepReadonlyObject13448<T> = {
  readonly [P in keyof T]: DeepReadonly13448<T[P]>;
};

type UnionToIntersection13448<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13448<T> = UnionToIntersection13448<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13448<T extends unknown[], V> = [...T, V];

type TuplifyUnion13448<T, L = LastOf13448<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13448<TuplifyUnion13448<Exclude<T, L>>, L>;

type DeepPartial13448<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13448<T[P]> }
  : T;

type Paths13448<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13448<K, Paths13448<T[K], Prev13448[D]>> : never }[keyof T]
  : never;

type Prev13448 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13448<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13448 {
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

type ConfigPaths13448 = Paths13448<NestedConfig13448>;

interface HeavyProps13448 {
  config: DeepPartial13448<NestedConfig13448>;
  path?: ConfigPaths13448;
}

const HeavyComponent13448 = memo(function HeavyComponent13448({ config }: HeavyProps13448) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13448) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13448 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13448: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13448.displayName = 'HeavyComponent13448';
export default HeavyComponent13448;
