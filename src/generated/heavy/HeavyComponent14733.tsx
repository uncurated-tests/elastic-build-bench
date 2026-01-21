'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14733<T> = T extends (infer U)[]
  ? DeepReadonlyArray14733<U>
  : T extends object
  ? DeepReadonlyObject14733<T>
  : T;

interface DeepReadonlyArray14733<T> extends ReadonlyArray<DeepReadonly14733<T>> {}

type DeepReadonlyObject14733<T> = {
  readonly [P in keyof T]: DeepReadonly14733<T[P]>;
};

type UnionToIntersection14733<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14733<T> = UnionToIntersection14733<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14733<T extends unknown[], V> = [...T, V];

type TuplifyUnion14733<T, L = LastOf14733<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14733<TuplifyUnion14733<Exclude<T, L>>, L>;

type DeepPartial14733<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14733<T[P]> }
  : T;

type Paths14733<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14733<K, Paths14733<T[K], Prev14733[D]>> : never }[keyof T]
  : never;

type Prev14733 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14733<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14733 {
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

type ConfigPaths14733 = Paths14733<NestedConfig14733>;

interface HeavyProps14733 {
  config: DeepPartial14733<NestedConfig14733>;
  path?: ConfigPaths14733;
}

const HeavyComponent14733 = memo(function HeavyComponent14733({ config }: HeavyProps14733) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14733) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14733 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14733: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14733.displayName = 'HeavyComponent14733';
export default HeavyComponent14733;
