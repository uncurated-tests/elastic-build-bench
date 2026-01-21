'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly178<T> = T extends (infer U)[]
  ? DeepReadonlyArray178<U>
  : T extends object
  ? DeepReadonlyObject178<T>
  : T;

interface DeepReadonlyArray178<T> extends ReadonlyArray<DeepReadonly178<T>> {}

type DeepReadonlyObject178<T> = {
  readonly [P in keyof T]: DeepReadonly178<T[P]>;
};

type UnionToIntersection178<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf178<T> = UnionToIntersection178<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push178<T extends unknown[], V> = [...T, V];

type TuplifyUnion178<T, L = LastOf178<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push178<TuplifyUnion178<Exclude<T, L>>, L>;

type DeepPartial178<T> = T extends object
  ? { [P in keyof T]?: DeepPartial178<T[P]> }
  : T;

type Paths178<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join178<K, Paths178<T[K], Prev178[D]>> : never }[keyof T]
  : never;

type Prev178 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join178<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig178 {
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

type ConfigPaths178 = Paths178<NestedConfig178>;

interface HeavyProps178 {
  config: DeepPartial178<NestedConfig178>;
  path?: ConfigPaths178;
}

const HeavyComponent178 = memo(function HeavyComponent178({ config }: HeavyProps178) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 178) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-178 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H178: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent178.displayName = 'HeavyComponent178';
export default HeavyComponent178;
