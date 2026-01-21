'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly378<T> = T extends (infer U)[]
  ? DeepReadonlyArray378<U>
  : T extends object
  ? DeepReadonlyObject378<T>
  : T;

interface DeepReadonlyArray378<T> extends ReadonlyArray<DeepReadonly378<T>> {}

type DeepReadonlyObject378<T> = {
  readonly [P in keyof T]: DeepReadonly378<T[P]>;
};

type UnionToIntersection378<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf378<T> = UnionToIntersection378<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push378<T extends unknown[], V> = [...T, V];

type TuplifyUnion378<T, L = LastOf378<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push378<TuplifyUnion378<Exclude<T, L>>, L>;

type DeepPartial378<T> = T extends object
  ? { [P in keyof T]?: DeepPartial378<T[P]> }
  : T;

type Paths378<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join378<K, Paths378<T[K], Prev378[D]>> : never }[keyof T]
  : never;

type Prev378 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join378<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig378 {
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

type ConfigPaths378 = Paths378<NestedConfig378>;

interface HeavyProps378 {
  config: DeepPartial378<NestedConfig378>;
  path?: ConfigPaths378;
}

const HeavyComponent378 = memo(function HeavyComponent378({ config }: HeavyProps378) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 378) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-378 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H378: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent378.displayName = 'HeavyComponent378';
export default HeavyComponent378;
