'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13463<T> = T extends (infer U)[]
  ? DeepReadonlyArray13463<U>
  : T extends object
  ? DeepReadonlyObject13463<T>
  : T;

interface DeepReadonlyArray13463<T> extends ReadonlyArray<DeepReadonly13463<T>> {}

type DeepReadonlyObject13463<T> = {
  readonly [P in keyof T]: DeepReadonly13463<T[P]>;
};

type UnionToIntersection13463<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13463<T> = UnionToIntersection13463<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13463<T extends unknown[], V> = [...T, V];

type TuplifyUnion13463<T, L = LastOf13463<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13463<TuplifyUnion13463<Exclude<T, L>>, L>;

type DeepPartial13463<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13463<T[P]> }
  : T;

type Paths13463<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13463<K, Paths13463<T[K], Prev13463[D]>> : never }[keyof T]
  : never;

type Prev13463 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13463<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13463 {
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

type ConfigPaths13463 = Paths13463<NestedConfig13463>;

interface HeavyProps13463 {
  config: DeepPartial13463<NestedConfig13463>;
  path?: ConfigPaths13463;
}

const HeavyComponent13463 = memo(function HeavyComponent13463({ config }: HeavyProps13463) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13463) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13463 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13463: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13463.displayName = 'HeavyComponent13463';
export default HeavyComponent13463;
