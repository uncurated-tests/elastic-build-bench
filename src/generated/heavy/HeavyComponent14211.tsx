'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14211<T> = T extends (infer U)[]
  ? DeepReadonlyArray14211<U>
  : T extends object
  ? DeepReadonlyObject14211<T>
  : T;

interface DeepReadonlyArray14211<T> extends ReadonlyArray<DeepReadonly14211<T>> {}

type DeepReadonlyObject14211<T> = {
  readonly [P in keyof T]: DeepReadonly14211<T[P]>;
};

type UnionToIntersection14211<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14211<T> = UnionToIntersection14211<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14211<T extends unknown[], V> = [...T, V];

type TuplifyUnion14211<T, L = LastOf14211<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14211<TuplifyUnion14211<Exclude<T, L>>, L>;

type DeepPartial14211<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14211<T[P]> }
  : T;

type Paths14211<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14211<K, Paths14211<T[K], Prev14211[D]>> : never }[keyof T]
  : never;

type Prev14211 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14211<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14211 {
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

type ConfigPaths14211 = Paths14211<NestedConfig14211>;

interface HeavyProps14211 {
  config: DeepPartial14211<NestedConfig14211>;
  path?: ConfigPaths14211;
}

const HeavyComponent14211 = memo(function HeavyComponent14211({ config }: HeavyProps14211) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14211) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14211 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14211: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14211.displayName = 'HeavyComponent14211';
export default HeavyComponent14211;
