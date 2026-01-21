'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13835<T> = T extends (infer U)[]
  ? DeepReadonlyArray13835<U>
  : T extends object
  ? DeepReadonlyObject13835<T>
  : T;

interface DeepReadonlyArray13835<T> extends ReadonlyArray<DeepReadonly13835<T>> {}

type DeepReadonlyObject13835<T> = {
  readonly [P in keyof T]: DeepReadonly13835<T[P]>;
};

type UnionToIntersection13835<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13835<T> = UnionToIntersection13835<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13835<T extends unknown[], V> = [...T, V];

type TuplifyUnion13835<T, L = LastOf13835<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13835<TuplifyUnion13835<Exclude<T, L>>, L>;

type DeepPartial13835<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13835<T[P]> }
  : T;

type Paths13835<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13835<K, Paths13835<T[K], Prev13835[D]>> : never }[keyof T]
  : never;

type Prev13835 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13835<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13835 {
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

type ConfigPaths13835 = Paths13835<NestedConfig13835>;

interface HeavyProps13835 {
  config: DeepPartial13835<NestedConfig13835>;
  path?: ConfigPaths13835;
}

const HeavyComponent13835 = memo(function HeavyComponent13835({ config }: HeavyProps13835) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13835) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13835 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13835: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13835.displayName = 'HeavyComponent13835';
export default HeavyComponent13835;
