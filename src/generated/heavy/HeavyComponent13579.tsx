'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13579<T> = T extends (infer U)[]
  ? DeepReadonlyArray13579<U>
  : T extends object
  ? DeepReadonlyObject13579<T>
  : T;

interface DeepReadonlyArray13579<T> extends ReadonlyArray<DeepReadonly13579<T>> {}

type DeepReadonlyObject13579<T> = {
  readonly [P in keyof T]: DeepReadonly13579<T[P]>;
};

type UnionToIntersection13579<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13579<T> = UnionToIntersection13579<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13579<T extends unknown[], V> = [...T, V];

type TuplifyUnion13579<T, L = LastOf13579<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13579<TuplifyUnion13579<Exclude<T, L>>, L>;

type DeepPartial13579<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13579<T[P]> }
  : T;

type Paths13579<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13579<K, Paths13579<T[K], Prev13579[D]>> : never }[keyof T]
  : never;

type Prev13579 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13579<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13579 {
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

type ConfigPaths13579 = Paths13579<NestedConfig13579>;

interface HeavyProps13579 {
  config: DeepPartial13579<NestedConfig13579>;
  path?: ConfigPaths13579;
}

const HeavyComponent13579 = memo(function HeavyComponent13579({ config }: HeavyProps13579) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13579) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13579 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13579: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13579.displayName = 'HeavyComponent13579';
export default HeavyComponent13579;
