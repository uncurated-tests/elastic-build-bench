'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13785<T> = T extends (infer U)[]
  ? DeepReadonlyArray13785<U>
  : T extends object
  ? DeepReadonlyObject13785<T>
  : T;

interface DeepReadonlyArray13785<T> extends ReadonlyArray<DeepReadonly13785<T>> {}

type DeepReadonlyObject13785<T> = {
  readonly [P in keyof T]: DeepReadonly13785<T[P]>;
};

type UnionToIntersection13785<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13785<T> = UnionToIntersection13785<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13785<T extends unknown[], V> = [...T, V];

type TuplifyUnion13785<T, L = LastOf13785<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13785<TuplifyUnion13785<Exclude<T, L>>, L>;

type DeepPartial13785<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13785<T[P]> }
  : T;

type Paths13785<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13785<K, Paths13785<T[K], Prev13785[D]>> : never }[keyof T]
  : never;

type Prev13785 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13785<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13785 {
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

type ConfigPaths13785 = Paths13785<NestedConfig13785>;

interface HeavyProps13785 {
  config: DeepPartial13785<NestedConfig13785>;
  path?: ConfigPaths13785;
}

const HeavyComponent13785 = memo(function HeavyComponent13785({ config }: HeavyProps13785) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13785) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13785 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13785: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13785.displayName = 'HeavyComponent13785';
export default HeavyComponent13785;
