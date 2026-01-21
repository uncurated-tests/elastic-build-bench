'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13131<T> = T extends (infer U)[]
  ? DeepReadonlyArray13131<U>
  : T extends object
  ? DeepReadonlyObject13131<T>
  : T;

interface DeepReadonlyArray13131<T> extends ReadonlyArray<DeepReadonly13131<T>> {}

type DeepReadonlyObject13131<T> = {
  readonly [P in keyof T]: DeepReadonly13131<T[P]>;
};

type UnionToIntersection13131<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13131<T> = UnionToIntersection13131<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13131<T extends unknown[], V> = [...T, V];

type TuplifyUnion13131<T, L = LastOf13131<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13131<TuplifyUnion13131<Exclude<T, L>>, L>;

type DeepPartial13131<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13131<T[P]> }
  : T;

type Paths13131<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13131<K, Paths13131<T[K], Prev13131[D]>> : never }[keyof T]
  : never;

type Prev13131 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13131<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13131 {
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

type ConfigPaths13131 = Paths13131<NestedConfig13131>;

interface HeavyProps13131 {
  config: DeepPartial13131<NestedConfig13131>;
  path?: ConfigPaths13131;
}

const HeavyComponent13131 = memo(function HeavyComponent13131({ config }: HeavyProps13131) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13131) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13131 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13131: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13131.displayName = 'HeavyComponent13131';
export default HeavyComponent13131;
