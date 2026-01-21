'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14142<T> = T extends (infer U)[]
  ? DeepReadonlyArray14142<U>
  : T extends object
  ? DeepReadonlyObject14142<T>
  : T;

interface DeepReadonlyArray14142<T> extends ReadonlyArray<DeepReadonly14142<T>> {}

type DeepReadonlyObject14142<T> = {
  readonly [P in keyof T]: DeepReadonly14142<T[P]>;
};

type UnionToIntersection14142<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14142<T> = UnionToIntersection14142<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14142<T extends unknown[], V> = [...T, V];

type TuplifyUnion14142<T, L = LastOf14142<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14142<TuplifyUnion14142<Exclude<T, L>>, L>;

type DeepPartial14142<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14142<T[P]> }
  : T;

type Paths14142<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14142<K, Paths14142<T[K], Prev14142[D]>> : never }[keyof T]
  : never;

type Prev14142 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14142<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14142 {
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

type ConfigPaths14142 = Paths14142<NestedConfig14142>;

interface HeavyProps14142 {
  config: DeepPartial14142<NestedConfig14142>;
  path?: ConfigPaths14142;
}

const HeavyComponent14142 = memo(function HeavyComponent14142({ config }: HeavyProps14142) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14142) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14142 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14142: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14142.displayName = 'HeavyComponent14142';
export default HeavyComponent14142;
