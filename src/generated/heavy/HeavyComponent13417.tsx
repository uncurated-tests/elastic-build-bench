'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13417<T> = T extends (infer U)[]
  ? DeepReadonlyArray13417<U>
  : T extends object
  ? DeepReadonlyObject13417<T>
  : T;

interface DeepReadonlyArray13417<T> extends ReadonlyArray<DeepReadonly13417<T>> {}

type DeepReadonlyObject13417<T> = {
  readonly [P in keyof T]: DeepReadonly13417<T[P]>;
};

type UnionToIntersection13417<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13417<T> = UnionToIntersection13417<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13417<T extends unknown[], V> = [...T, V];

type TuplifyUnion13417<T, L = LastOf13417<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13417<TuplifyUnion13417<Exclude<T, L>>, L>;

type DeepPartial13417<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13417<T[P]> }
  : T;

type Paths13417<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13417<K, Paths13417<T[K], Prev13417[D]>> : never }[keyof T]
  : never;

type Prev13417 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13417<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13417 {
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

type ConfigPaths13417 = Paths13417<NestedConfig13417>;

interface HeavyProps13417 {
  config: DeepPartial13417<NestedConfig13417>;
  path?: ConfigPaths13417;
}

const HeavyComponent13417 = memo(function HeavyComponent13417({ config }: HeavyProps13417) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13417) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13417 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13417: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13417.displayName = 'HeavyComponent13417';
export default HeavyComponent13417;
