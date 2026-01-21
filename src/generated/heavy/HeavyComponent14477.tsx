'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14477<T> = T extends (infer U)[]
  ? DeepReadonlyArray14477<U>
  : T extends object
  ? DeepReadonlyObject14477<T>
  : T;

interface DeepReadonlyArray14477<T> extends ReadonlyArray<DeepReadonly14477<T>> {}

type DeepReadonlyObject14477<T> = {
  readonly [P in keyof T]: DeepReadonly14477<T[P]>;
};

type UnionToIntersection14477<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14477<T> = UnionToIntersection14477<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14477<T extends unknown[], V> = [...T, V];

type TuplifyUnion14477<T, L = LastOf14477<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14477<TuplifyUnion14477<Exclude<T, L>>, L>;

type DeepPartial14477<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14477<T[P]> }
  : T;

type Paths14477<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14477<K, Paths14477<T[K], Prev14477[D]>> : never }[keyof T]
  : never;

type Prev14477 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14477<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14477 {
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

type ConfigPaths14477 = Paths14477<NestedConfig14477>;

interface HeavyProps14477 {
  config: DeepPartial14477<NestedConfig14477>;
  path?: ConfigPaths14477;
}

const HeavyComponent14477 = memo(function HeavyComponent14477({ config }: HeavyProps14477) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14477) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14477 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14477: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14477.displayName = 'HeavyComponent14477';
export default HeavyComponent14477;
