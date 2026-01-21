'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13900<T> = T extends (infer U)[]
  ? DeepReadonlyArray13900<U>
  : T extends object
  ? DeepReadonlyObject13900<T>
  : T;

interface DeepReadonlyArray13900<T> extends ReadonlyArray<DeepReadonly13900<T>> {}

type DeepReadonlyObject13900<T> = {
  readonly [P in keyof T]: DeepReadonly13900<T[P]>;
};

type UnionToIntersection13900<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13900<T> = UnionToIntersection13900<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13900<T extends unknown[], V> = [...T, V];

type TuplifyUnion13900<T, L = LastOf13900<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13900<TuplifyUnion13900<Exclude<T, L>>, L>;

type DeepPartial13900<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13900<T[P]> }
  : T;

type Paths13900<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13900<K, Paths13900<T[K], Prev13900[D]>> : never }[keyof T]
  : never;

type Prev13900 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13900<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13900 {
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

type ConfigPaths13900 = Paths13900<NestedConfig13900>;

interface HeavyProps13900 {
  config: DeepPartial13900<NestedConfig13900>;
  path?: ConfigPaths13900;
}

const HeavyComponent13900 = memo(function HeavyComponent13900({ config }: HeavyProps13900) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13900) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13900 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13900: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13900.displayName = 'HeavyComponent13900';
export default HeavyComponent13900;
