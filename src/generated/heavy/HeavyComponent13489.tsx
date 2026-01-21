'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13489<T> = T extends (infer U)[]
  ? DeepReadonlyArray13489<U>
  : T extends object
  ? DeepReadonlyObject13489<T>
  : T;

interface DeepReadonlyArray13489<T> extends ReadonlyArray<DeepReadonly13489<T>> {}

type DeepReadonlyObject13489<T> = {
  readonly [P in keyof T]: DeepReadonly13489<T[P]>;
};

type UnionToIntersection13489<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13489<T> = UnionToIntersection13489<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13489<T extends unknown[], V> = [...T, V];

type TuplifyUnion13489<T, L = LastOf13489<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13489<TuplifyUnion13489<Exclude<T, L>>, L>;

type DeepPartial13489<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13489<T[P]> }
  : T;

type Paths13489<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13489<K, Paths13489<T[K], Prev13489[D]>> : never }[keyof T]
  : never;

type Prev13489 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13489<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13489 {
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

type ConfigPaths13489 = Paths13489<NestedConfig13489>;

interface HeavyProps13489 {
  config: DeepPartial13489<NestedConfig13489>;
  path?: ConfigPaths13489;
}

const HeavyComponent13489 = memo(function HeavyComponent13489({ config }: HeavyProps13489) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13489) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13489 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13489: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13489.displayName = 'HeavyComponent13489';
export default HeavyComponent13489;
