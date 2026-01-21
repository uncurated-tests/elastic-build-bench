'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13375<T> = T extends (infer U)[]
  ? DeepReadonlyArray13375<U>
  : T extends object
  ? DeepReadonlyObject13375<T>
  : T;

interface DeepReadonlyArray13375<T> extends ReadonlyArray<DeepReadonly13375<T>> {}

type DeepReadonlyObject13375<T> = {
  readonly [P in keyof T]: DeepReadonly13375<T[P]>;
};

type UnionToIntersection13375<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13375<T> = UnionToIntersection13375<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13375<T extends unknown[], V> = [...T, V];

type TuplifyUnion13375<T, L = LastOf13375<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13375<TuplifyUnion13375<Exclude<T, L>>, L>;

type DeepPartial13375<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13375<T[P]> }
  : T;

type Paths13375<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13375<K, Paths13375<T[K], Prev13375[D]>> : never }[keyof T]
  : never;

type Prev13375 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13375<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13375 {
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

type ConfigPaths13375 = Paths13375<NestedConfig13375>;

interface HeavyProps13375 {
  config: DeepPartial13375<NestedConfig13375>;
  path?: ConfigPaths13375;
}

const HeavyComponent13375 = memo(function HeavyComponent13375({ config }: HeavyProps13375) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13375) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13375 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13375: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13375.displayName = 'HeavyComponent13375';
export default HeavyComponent13375;
