'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13590<T> = T extends (infer U)[]
  ? DeepReadonlyArray13590<U>
  : T extends object
  ? DeepReadonlyObject13590<T>
  : T;

interface DeepReadonlyArray13590<T> extends ReadonlyArray<DeepReadonly13590<T>> {}

type DeepReadonlyObject13590<T> = {
  readonly [P in keyof T]: DeepReadonly13590<T[P]>;
};

type UnionToIntersection13590<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13590<T> = UnionToIntersection13590<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13590<T extends unknown[], V> = [...T, V];

type TuplifyUnion13590<T, L = LastOf13590<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13590<TuplifyUnion13590<Exclude<T, L>>, L>;

type DeepPartial13590<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13590<T[P]> }
  : T;

type Paths13590<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13590<K, Paths13590<T[K], Prev13590[D]>> : never }[keyof T]
  : never;

type Prev13590 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13590<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13590 {
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

type ConfigPaths13590 = Paths13590<NestedConfig13590>;

interface HeavyProps13590 {
  config: DeepPartial13590<NestedConfig13590>;
  path?: ConfigPaths13590;
}

const HeavyComponent13590 = memo(function HeavyComponent13590({ config }: HeavyProps13590) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13590) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13590 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13590: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13590.displayName = 'HeavyComponent13590';
export default HeavyComponent13590;
