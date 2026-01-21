'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13017<T> = T extends (infer U)[]
  ? DeepReadonlyArray13017<U>
  : T extends object
  ? DeepReadonlyObject13017<T>
  : T;

interface DeepReadonlyArray13017<T> extends ReadonlyArray<DeepReadonly13017<T>> {}

type DeepReadonlyObject13017<T> = {
  readonly [P in keyof T]: DeepReadonly13017<T[P]>;
};

type UnionToIntersection13017<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13017<T> = UnionToIntersection13017<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13017<T extends unknown[], V> = [...T, V];

type TuplifyUnion13017<T, L = LastOf13017<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13017<TuplifyUnion13017<Exclude<T, L>>, L>;

type DeepPartial13017<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13017<T[P]> }
  : T;

type Paths13017<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13017<K, Paths13017<T[K], Prev13017[D]>> : never }[keyof T]
  : never;

type Prev13017 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13017<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13017 {
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

type ConfigPaths13017 = Paths13017<NestedConfig13017>;

interface HeavyProps13017 {
  config: DeepPartial13017<NestedConfig13017>;
  path?: ConfigPaths13017;
}

const HeavyComponent13017 = memo(function HeavyComponent13017({ config }: HeavyProps13017) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13017) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13017 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13017: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13017.displayName = 'HeavyComponent13017';
export default HeavyComponent13017;
