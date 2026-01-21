'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13634<T> = T extends (infer U)[]
  ? DeepReadonlyArray13634<U>
  : T extends object
  ? DeepReadonlyObject13634<T>
  : T;

interface DeepReadonlyArray13634<T> extends ReadonlyArray<DeepReadonly13634<T>> {}

type DeepReadonlyObject13634<T> = {
  readonly [P in keyof T]: DeepReadonly13634<T[P]>;
};

type UnionToIntersection13634<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13634<T> = UnionToIntersection13634<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13634<T extends unknown[], V> = [...T, V];

type TuplifyUnion13634<T, L = LastOf13634<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13634<TuplifyUnion13634<Exclude<T, L>>, L>;

type DeepPartial13634<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13634<T[P]> }
  : T;

type Paths13634<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13634<K, Paths13634<T[K], Prev13634[D]>> : never }[keyof T]
  : never;

type Prev13634 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13634<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13634 {
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

type ConfigPaths13634 = Paths13634<NestedConfig13634>;

interface HeavyProps13634 {
  config: DeepPartial13634<NestedConfig13634>;
  path?: ConfigPaths13634;
}

const HeavyComponent13634 = memo(function HeavyComponent13634({ config }: HeavyProps13634) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13634) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13634 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13634: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13634.displayName = 'HeavyComponent13634';
export default HeavyComponent13634;
