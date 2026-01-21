'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly764<T> = T extends (infer U)[]
  ? DeepReadonlyArray764<U>
  : T extends object
  ? DeepReadonlyObject764<T>
  : T;

interface DeepReadonlyArray764<T> extends ReadonlyArray<DeepReadonly764<T>> {}

type DeepReadonlyObject764<T> = {
  readonly [P in keyof T]: DeepReadonly764<T[P]>;
};

type UnionToIntersection764<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf764<T> = UnionToIntersection764<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push764<T extends unknown[], V> = [...T, V];

type TuplifyUnion764<T, L = LastOf764<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push764<TuplifyUnion764<Exclude<T, L>>, L>;

type DeepPartial764<T> = T extends object
  ? { [P in keyof T]?: DeepPartial764<T[P]> }
  : T;

type Paths764<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join764<K, Paths764<T[K], Prev764[D]>> : never }[keyof T]
  : never;

type Prev764 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join764<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig764 {
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

type ConfigPaths764 = Paths764<NestedConfig764>;

interface HeavyProps764 {
  config: DeepPartial764<NestedConfig764>;
  path?: ConfigPaths764;
}

const HeavyComponent764 = memo(function HeavyComponent764({ config }: HeavyProps764) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 764) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-764 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H764: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent764.displayName = 'HeavyComponent764';
export default HeavyComponent764;
