'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13741<T> = T extends (infer U)[]
  ? DeepReadonlyArray13741<U>
  : T extends object
  ? DeepReadonlyObject13741<T>
  : T;

interface DeepReadonlyArray13741<T> extends ReadonlyArray<DeepReadonly13741<T>> {}

type DeepReadonlyObject13741<T> = {
  readonly [P in keyof T]: DeepReadonly13741<T[P]>;
};

type UnionToIntersection13741<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13741<T> = UnionToIntersection13741<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13741<T extends unknown[], V> = [...T, V];

type TuplifyUnion13741<T, L = LastOf13741<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13741<TuplifyUnion13741<Exclude<T, L>>, L>;

type DeepPartial13741<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13741<T[P]> }
  : T;

type Paths13741<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13741<K, Paths13741<T[K], Prev13741[D]>> : never }[keyof T]
  : never;

type Prev13741 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13741<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13741 {
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

type ConfigPaths13741 = Paths13741<NestedConfig13741>;

interface HeavyProps13741 {
  config: DeepPartial13741<NestedConfig13741>;
  path?: ConfigPaths13741;
}

const HeavyComponent13741 = memo(function HeavyComponent13741({ config }: HeavyProps13741) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13741) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13741 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13741: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13741.displayName = 'HeavyComponent13741';
export default HeavyComponent13741;
