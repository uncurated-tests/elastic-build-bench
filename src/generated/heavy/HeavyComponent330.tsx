'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly330<T> = T extends (infer U)[]
  ? DeepReadonlyArray330<U>
  : T extends object
  ? DeepReadonlyObject330<T>
  : T;

interface DeepReadonlyArray330<T> extends ReadonlyArray<DeepReadonly330<T>> {}

type DeepReadonlyObject330<T> = {
  readonly [P in keyof T]: DeepReadonly330<T[P]>;
};

type UnionToIntersection330<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf330<T> = UnionToIntersection330<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push330<T extends unknown[], V> = [...T, V];

type TuplifyUnion330<T, L = LastOf330<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push330<TuplifyUnion330<Exclude<T, L>>, L>;

type DeepPartial330<T> = T extends object
  ? { [P in keyof T]?: DeepPartial330<T[P]> }
  : T;

type Paths330<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join330<K, Paths330<T[K], Prev330[D]>> : never }[keyof T]
  : never;

type Prev330 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join330<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig330 {
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

type ConfigPaths330 = Paths330<NestedConfig330>;

interface HeavyProps330 {
  config: DeepPartial330<NestedConfig330>;
  path?: ConfigPaths330;
}

const HeavyComponent330 = memo(function HeavyComponent330({ config }: HeavyProps330) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 330) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-330 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H330: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent330.displayName = 'HeavyComponent330';
export default HeavyComponent330;
