'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly20<T> = T extends (infer U)[]
  ? DeepReadonlyArray20<U>
  : T extends object
  ? DeepReadonlyObject20<T>
  : T;

interface DeepReadonlyArray20<T> extends ReadonlyArray<DeepReadonly20<T>> {}

type DeepReadonlyObject20<T> = {
  readonly [P in keyof T]: DeepReadonly20<T[P]>;
};

type UnionToIntersection20<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf20<T> = UnionToIntersection20<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push20<T extends unknown[], V> = [...T, V];

type TuplifyUnion20<T, L = LastOf20<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push20<TuplifyUnion20<Exclude<T, L>>, L>;

type DeepPartial20<T> = T extends object
  ? { [P in keyof T]?: DeepPartial20<T[P]> }
  : T;

type Paths20<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join20<K, Paths20<T[K], Prev20[D]>> : never }[keyof T]
  : never;

type Prev20 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join20<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig20 {
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

type ConfigPaths20 = Paths20<NestedConfig20>;

interface HeavyProps20 {
  config: DeepPartial20<NestedConfig20>;
  path?: ConfigPaths20;
}

const HeavyComponent20 = memo(function HeavyComponent20({ config }: HeavyProps20) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 20) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-20 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H20: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent20.displayName = 'HeavyComponent20';
export default HeavyComponent20;
