'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14816<T> = T extends (infer U)[]
  ? DeepReadonlyArray14816<U>
  : T extends object
  ? DeepReadonlyObject14816<T>
  : T;

interface DeepReadonlyArray14816<T> extends ReadonlyArray<DeepReadonly14816<T>> {}

type DeepReadonlyObject14816<T> = {
  readonly [P in keyof T]: DeepReadonly14816<T[P]>;
};

type UnionToIntersection14816<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14816<T> = UnionToIntersection14816<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14816<T extends unknown[], V> = [...T, V];

type TuplifyUnion14816<T, L = LastOf14816<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14816<TuplifyUnion14816<Exclude<T, L>>, L>;

type DeepPartial14816<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14816<T[P]> }
  : T;

type Paths14816<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14816<K, Paths14816<T[K], Prev14816[D]>> : never }[keyof T]
  : never;

type Prev14816 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14816<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14816 {
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

type ConfigPaths14816 = Paths14816<NestedConfig14816>;

interface HeavyProps14816 {
  config: DeepPartial14816<NestedConfig14816>;
  path?: ConfigPaths14816;
}

const HeavyComponent14816 = memo(function HeavyComponent14816({ config }: HeavyProps14816) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14816) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14816 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14816: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14816.displayName = 'HeavyComponent14816';
export default HeavyComponent14816;
