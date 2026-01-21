'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly174<T> = T extends (infer U)[]
  ? DeepReadonlyArray174<U>
  : T extends object
  ? DeepReadonlyObject174<T>
  : T;

interface DeepReadonlyArray174<T> extends ReadonlyArray<DeepReadonly174<T>> {}

type DeepReadonlyObject174<T> = {
  readonly [P in keyof T]: DeepReadonly174<T[P]>;
};

type UnionToIntersection174<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf174<T> = UnionToIntersection174<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push174<T extends unknown[], V> = [...T, V];

type TuplifyUnion174<T, L = LastOf174<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push174<TuplifyUnion174<Exclude<T, L>>, L>;

type DeepPartial174<T> = T extends object
  ? { [P in keyof T]?: DeepPartial174<T[P]> }
  : T;

type Paths174<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join174<K, Paths174<T[K], Prev174[D]>> : never }[keyof T]
  : never;

type Prev174 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join174<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig174 {
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

type ConfigPaths174 = Paths174<NestedConfig174>;

interface HeavyProps174 {
  config: DeepPartial174<NestedConfig174>;
  path?: ConfigPaths174;
}

const HeavyComponent174 = memo(function HeavyComponent174({ config }: HeavyProps174) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 174) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-174 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H174: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent174.displayName = 'HeavyComponent174';
export default HeavyComponent174;
