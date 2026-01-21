'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly765<T> = T extends (infer U)[]
  ? DeepReadonlyArray765<U>
  : T extends object
  ? DeepReadonlyObject765<T>
  : T;

interface DeepReadonlyArray765<T> extends ReadonlyArray<DeepReadonly765<T>> {}

type DeepReadonlyObject765<T> = {
  readonly [P in keyof T]: DeepReadonly765<T[P]>;
};

type UnionToIntersection765<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf765<T> = UnionToIntersection765<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push765<T extends unknown[], V> = [...T, V];

type TuplifyUnion765<T, L = LastOf765<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push765<TuplifyUnion765<Exclude<T, L>>, L>;

type DeepPartial765<T> = T extends object
  ? { [P in keyof T]?: DeepPartial765<T[P]> }
  : T;

type Paths765<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join765<K, Paths765<T[K], Prev765[D]>> : never }[keyof T]
  : never;

type Prev765 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join765<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig765 {
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

type ConfigPaths765 = Paths765<NestedConfig765>;

interface HeavyProps765 {
  config: DeepPartial765<NestedConfig765>;
  path?: ConfigPaths765;
}

const HeavyComponent765 = memo(function HeavyComponent765({ config }: HeavyProps765) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 765) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-765 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H765: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent765.displayName = 'HeavyComponent765';
export default HeavyComponent765;
