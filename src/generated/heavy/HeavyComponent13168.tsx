'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13168<T> = T extends (infer U)[]
  ? DeepReadonlyArray13168<U>
  : T extends object
  ? DeepReadonlyObject13168<T>
  : T;

interface DeepReadonlyArray13168<T> extends ReadonlyArray<DeepReadonly13168<T>> {}

type DeepReadonlyObject13168<T> = {
  readonly [P in keyof T]: DeepReadonly13168<T[P]>;
};

type UnionToIntersection13168<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13168<T> = UnionToIntersection13168<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13168<T extends unknown[], V> = [...T, V];

type TuplifyUnion13168<T, L = LastOf13168<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13168<TuplifyUnion13168<Exclude<T, L>>, L>;

type DeepPartial13168<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13168<T[P]> }
  : T;

type Paths13168<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13168<K, Paths13168<T[K], Prev13168[D]>> : never }[keyof T]
  : never;

type Prev13168 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13168<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13168 {
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

type ConfigPaths13168 = Paths13168<NestedConfig13168>;

interface HeavyProps13168 {
  config: DeepPartial13168<NestedConfig13168>;
  path?: ConfigPaths13168;
}

const HeavyComponent13168 = memo(function HeavyComponent13168({ config }: HeavyProps13168) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13168) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13168 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13168: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13168.displayName = 'HeavyComponent13168';
export default HeavyComponent13168;
