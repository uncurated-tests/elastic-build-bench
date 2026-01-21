'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly300<T> = T extends (infer U)[]
  ? DeepReadonlyArray300<U>
  : T extends object
  ? DeepReadonlyObject300<T>
  : T;

interface DeepReadonlyArray300<T> extends ReadonlyArray<DeepReadonly300<T>> {}

type DeepReadonlyObject300<T> = {
  readonly [P in keyof T]: DeepReadonly300<T[P]>;
};

type UnionToIntersection300<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf300<T> = UnionToIntersection300<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push300<T extends unknown[], V> = [...T, V];

type TuplifyUnion300<T, L = LastOf300<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push300<TuplifyUnion300<Exclude<T, L>>, L>;

type DeepPartial300<T> = T extends object
  ? { [P in keyof T]?: DeepPartial300<T[P]> }
  : T;

type Paths300<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join300<K, Paths300<T[K], Prev300[D]>> : never }[keyof T]
  : never;

type Prev300 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join300<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig300 {
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

type ConfigPaths300 = Paths300<NestedConfig300>;

interface HeavyProps300 {
  config: DeepPartial300<NestedConfig300>;
  path?: ConfigPaths300;
}

const HeavyComponent300 = memo(function HeavyComponent300({ config }: HeavyProps300) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 300) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-300 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H300: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent300.displayName = 'HeavyComponent300';
export default HeavyComponent300;
