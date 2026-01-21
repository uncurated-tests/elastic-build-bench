'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14152<T> = T extends (infer U)[]
  ? DeepReadonlyArray14152<U>
  : T extends object
  ? DeepReadonlyObject14152<T>
  : T;

interface DeepReadonlyArray14152<T> extends ReadonlyArray<DeepReadonly14152<T>> {}

type DeepReadonlyObject14152<T> = {
  readonly [P in keyof T]: DeepReadonly14152<T[P]>;
};

type UnionToIntersection14152<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14152<T> = UnionToIntersection14152<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14152<T extends unknown[], V> = [...T, V];

type TuplifyUnion14152<T, L = LastOf14152<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14152<TuplifyUnion14152<Exclude<T, L>>, L>;

type DeepPartial14152<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14152<T[P]> }
  : T;

type Paths14152<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14152<K, Paths14152<T[K], Prev14152[D]>> : never }[keyof T]
  : never;

type Prev14152 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14152<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14152 {
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

type ConfigPaths14152 = Paths14152<NestedConfig14152>;

interface HeavyProps14152 {
  config: DeepPartial14152<NestedConfig14152>;
  path?: ConfigPaths14152;
}

const HeavyComponent14152 = memo(function HeavyComponent14152({ config }: HeavyProps14152) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14152) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14152 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14152: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14152.displayName = 'HeavyComponent14152';
export default HeavyComponent14152;
