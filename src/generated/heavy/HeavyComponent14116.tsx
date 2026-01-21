'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14116<T> = T extends (infer U)[]
  ? DeepReadonlyArray14116<U>
  : T extends object
  ? DeepReadonlyObject14116<T>
  : T;

interface DeepReadonlyArray14116<T> extends ReadonlyArray<DeepReadonly14116<T>> {}

type DeepReadonlyObject14116<T> = {
  readonly [P in keyof T]: DeepReadonly14116<T[P]>;
};

type UnionToIntersection14116<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14116<T> = UnionToIntersection14116<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14116<T extends unknown[], V> = [...T, V];

type TuplifyUnion14116<T, L = LastOf14116<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14116<TuplifyUnion14116<Exclude<T, L>>, L>;

type DeepPartial14116<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14116<T[P]> }
  : T;

type Paths14116<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14116<K, Paths14116<T[K], Prev14116[D]>> : never }[keyof T]
  : never;

type Prev14116 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14116<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14116 {
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

type ConfigPaths14116 = Paths14116<NestedConfig14116>;

interface HeavyProps14116 {
  config: DeepPartial14116<NestedConfig14116>;
  path?: ConfigPaths14116;
}

const HeavyComponent14116 = memo(function HeavyComponent14116({ config }: HeavyProps14116) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14116) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14116 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14116: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14116.displayName = 'HeavyComponent14116';
export default HeavyComponent14116;
