'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14224<T> = T extends (infer U)[]
  ? DeepReadonlyArray14224<U>
  : T extends object
  ? DeepReadonlyObject14224<T>
  : T;

interface DeepReadonlyArray14224<T> extends ReadonlyArray<DeepReadonly14224<T>> {}

type DeepReadonlyObject14224<T> = {
  readonly [P in keyof T]: DeepReadonly14224<T[P]>;
};

type UnionToIntersection14224<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14224<T> = UnionToIntersection14224<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14224<T extends unknown[], V> = [...T, V];

type TuplifyUnion14224<T, L = LastOf14224<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14224<TuplifyUnion14224<Exclude<T, L>>, L>;

type DeepPartial14224<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14224<T[P]> }
  : T;

type Paths14224<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14224<K, Paths14224<T[K], Prev14224[D]>> : never }[keyof T]
  : never;

type Prev14224 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14224<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14224 {
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

type ConfigPaths14224 = Paths14224<NestedConfig14224>;

interface HeavyProps14224 {
  config: DeepPartial14224<NestedConfig14224>;
  path?: ConfigPaths14224;
}

const HeavyComponent14224 = memo(function HeavyComponent14224({ config }: HeavyProps14224) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14224) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14224 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14224: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14224.displayName = 'HeavyComponent14224';
export default HeavyComponent14224;
