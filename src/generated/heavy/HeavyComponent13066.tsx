'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13066<T> = T extends (infer U)[]
  ? DeepReadonlyArray13066<U>
  : T extends object
  ? DeepReadonlyObject13066<T>
  : T;

interface DeepReadonlyArray13066<T> extends ReadonlyArray<DeepReadonly13066<T>> {}

type DeepReadonlyObject13066<T> = {
  readonly [P in keyof T]: DeepReadonly13066<T[P]>;
};

type UnionToIntersection13066<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13066<T> = UnionToIntersection13066<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13066<T extends unknown[], V> = [...T, V];

type TuplifyUnion13066<T, L = LastOf13066<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13066<TuplifyUnion13066<Exclude<T, L>>, L>;

type DeepPartial13066<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13066<T[P]> }
  : T;

type Paths13066<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13066<K, Paths13066<T[K], Prev13066[D]>> : never }[keyof T]
  : never;

type Prev13066 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13066<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13066 {
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

type ConfigPaths13066 = Paths13066<NestedConfig13066>;

interface HeavyProps13066 {
  config: DeepPartial13066<NestedConfig13066>;
  path?: ConfigPaths13066;
}

const HeavyComponent13066 = memo(function HeavyComponent13066({ config }: HeavyProps13066) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13066) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13066 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13066: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13066.displayName = 'HeavyComponent13066';
export default HeavyComponent13066;
