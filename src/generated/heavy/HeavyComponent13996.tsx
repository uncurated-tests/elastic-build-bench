'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13996<T> = T extends (infer U)[]
  ? DeepReadonlyArray13996<U>
  : T extends object
  ? DeepReadonlyObject13996<T>
  : T;

interface DeepReadonlyArray13996<T> extends ReadonlyArray<DeepReadonly13996<T>> {}

type DeepReadonlyObject13996<T> = {
  readonly [P in keyof T]: DeepReadonly13996<T[P]>;
};

type UnionToIntersection13996<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13996<T> = UnionToIntersection13996<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13996<T extends unknown[], V> = [...T, V];

type TuplifyUnion13996<T, L = LastOf13996<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13996<TuplifyUnion13996<Exclude<T, L>>, L>;

type DeepPartial13996<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13996<T[P]> }
  : T;

type Paths13996<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13996<K, Paths13996<T[K], Prev13996[D]>> : never }[keyof T]
  : never;

type Prev13996 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13996<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13996 {
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

type ConfigPaths13996 = Paths13996<NestedConfig13996>;

interface HeavyProps13996 {
  config: DeepPartial13996<NestedConfig13996>;
  path?: ConfigPaths13996;
}

const HeavyComponent13996 = memo(function HeavyComponent13996({ config }: HeavyProps13996) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13996) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13996 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13996: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13996.displayName = 'HeavyComponent13996';
export default HeavyComponent13996;
