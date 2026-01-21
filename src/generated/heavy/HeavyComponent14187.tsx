'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14187<T> = T extends (infer U)[]
  ? DeepReadonlyArray14187<U>
  : T extends object
  ? DeepReadonlyObject14187<T>
  : T;

interface DeepReadonlyArray14187<T> extends ReadonlyArray<DeepReadonly14187<T>> {}

type DeepReadonlyObject14187<T> = {
  readonly [P in keyof T]: DeepReadonly14187<T[P]>;
};

type UnionToIntersection14187<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14187<T> = UnionToIntersection14187<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14187<T extends unknown[], V> = [...T, V];

type TuplifyUnion14187<T, L = LastOf14187<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14187<TuplifyUnion14187<Exclude<T, L>>, L>;

type DeepPartial14187<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14187<T[P]> }
  : T;

type Paths14187<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14187<K, Paths14187<T[K], Prev14187[D]>> : never }[keyof T]
  : never;

type Prev14187 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14187<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14187 {
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

type ConfigPaths14187 = Paths14187<NestedConfig14187>;

interface HeavyProps14187 {
  config: DeepPartial14187<NestedConfig14187>;
  path?: ConfigPaths14187;
}

const HeavyComponent14187 = memo(function HeavyComponent14187({ config }: HeavyProps14187) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14187) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14187 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14187: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14187.displayName = 'HeavyComponent14187';
export default HeavyComponent14187;
