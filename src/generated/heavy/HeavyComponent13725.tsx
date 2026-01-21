'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13725<T> = T extends (infer U)[]
  ? DeepReadonlyArray13725<U>
  : T extends object
  ? DeepReadonlyObject13725<T>
  : T;

interface DeepReadonlyArray13725<T> extends ReadonlyArray<DeepReadonly13725<T>> {}

type DeepReadonlyObject13725<T> = {
  readonly [P in keyof T]: DeepReadonly13725<T[P]>;
};

type UnionToIntersection13725<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13725<T> = UnionToIntersection13725<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13725<T extends unknown[], V> = [...T, V];

type TuplifyUnion13725<T, L = LastOf13725<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13725<TuplifyUnion13725<Exclude<T, L>>, L>;

type DeepPartial13725<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13725<T[P]> }
  : T;

type Paths13725<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13725<K, Paths13725<T[K], Prev13725[D]>> : never }[keyof T]
  : never;

type Prev13725 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13725<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13725 {
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

type ConfigPaths13725 = Paths13725<NestedConfig13725>;

interface HeavyProps13725 {
  config: DeepPartial13725<NestedConfig13725>;
  path?: ConfigPaths13725;
}

const HeavyComponent13725 = memo(function HeavyComponent13725({ config }: HeavyProps13725) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13725) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13725 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13725: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13725.displayName = 'HeavyComponent13725';
export default HeavyComponent13725;
