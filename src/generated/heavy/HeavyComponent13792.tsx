'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13792<T> = T extends (infer U)[]
  ? DeepReadonlyArray13792<U>
  : T extends object
  ? DeepReadonlyObject13792<T>
  : T;

interface DeepReadonlyArray13792<T> extends ReadonlyArray<DeepReadonly13792<T>> {}

type DeepReadonlyObject13792<T> = {
  readonly [P in keyof T]: DeepReadonly13792<T[P]>;
};

type UnionToIntersection13792<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13792<T> = UnionToIntersection13792<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13792<T extends unknown[], V> = [...T, V];

type TuplifyUnion13792<T, L = LastOf13792<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13792<TuplifyUnion13792<Exclude<T, L>>, L>;

type DeepPartial13792<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13792<T[P]> }
  : T;

type Paths13792<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13792<K, Paths13792<T[K], Prev13792[D]>> : never }[keyof T]
  : never;

type Prev13792 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13792<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13792 {
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

type ConfigPaths13792 = Paths13792<NestedConfig13792>;

interface HeavyProps13792 {
  config: DeepPartial13792<NestedConfig13792>;
  path?: ConfigPaths13792;
}

const HeavyComponent13792 = memo(function HeavyComponent13792({ config }: HeavyProps13792) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13792) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13792 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13792: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13792.displayName = 'HeavyComponent13792';
export default HeavyComponent13792;
