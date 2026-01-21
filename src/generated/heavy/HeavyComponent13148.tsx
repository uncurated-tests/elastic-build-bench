'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13148<T> = T extends (infer U)[]
  ? DeepReadonlyArray13148<U>
  : T extends object
  ? DeepReadonlyObject13148<T>
  : T;

interface DeepReadonlyArray13148<T> extends ReadonlyArray<DeepReadonly13148<T>> {}

type DeepReadonlyObject13148<T> = {
  readonly [P in keyof T]: DeepReadonly13148<T[P]>;
};

type UnionToIntersection13148<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13148<T> = UnionToIntersection13148<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13148<T extends unknown[], V> = [...T, V];

type TuplifyUnion13148<T, L = LastOf13148<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13148<TuplifyUnion13148<Exclude<T, L>>, L>;

type DeepPartial13148<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13148<T[P]> }
  : T;

type Paths13148<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13148<K, Paths13148<T[K], Prev13148[D]>> : never }[keyof T]
  : never;

type Prev13148 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13148<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13148 {
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

type ConfigPaths13148 = Paths13148<NestedConfig13148>;

interface HeavyProps13148 {
  config: DeepPartial13148<NestedConfig13148>;
  path?: ConfigPaths13148;
}

const HeavyComponent13148 = memo(function HeavyComponent13148({ config }: HeavyProps13148) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13148) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13148 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13148: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13148.displayName = 'HeavyComponent13148';
export default HeavyComponent13148;
