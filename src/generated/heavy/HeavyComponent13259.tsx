'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13259<T> = T extends (infer U)[]
  ? DeepReadonlyArray13259<U>
  : T extends object
  ? DeepReadonlyObject13259<T>
  : T;

interface DeepReadonlyArray13259<T> extends ReadonlyArray<DeepReadonly13259<T>> {}

type DeepReadonlyObject13259<T> = {
  readonly [P in keyof T]: DeepReadonly13259<T[P]>;
};

type UnionToIntersection13259<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13259<T> = UnionToIntersection13259<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13259<T extends unknown[], V> = [...T, V];

type TuplifyUnion13259<T, L = LastOf13259<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13259<TuplifyUnion13259<Exclude<T, L>>, L>;

type DeepPartial13259<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13259<T[P]> }
  : T;

type Paths13259<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13259<K, Paths13259<T[K], Prev13259[D]>> : never }[keyof T]
  : never;

type Prev13259 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13259<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13259 {
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

type ConfigPaths13259 = Paths13259<NestedConfig13259>;

interface HeavyProps13259 {
  config: DeepPartial13259<NestedConfig13259>;
  path?: ConfigPaths13259;
}

const HeavyComponent13259 = memo(function HeavyComponent13259({ config }: HeavyProps13259) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13259) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13259 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13259: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13259.displayName = 'HeavyComponent13259';
export default HeavyComponent13259;
