'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14042<T> = T extends (infer U)[]
  ? DeepReadonlyArray14042<U>
  : T extends object
  ? DeepReadonlyObject14042<T>
  : T;

interface DeepReadonlyArray14042<T> extends ReadonlyArray<DeepReadonly14042<T>> {}

type DeepReadonlyObject14042<T> = {
  readonly [P in keyof T]: DeepReadonly14042<T[P]>;
};

type UnionToIntersection14042<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14042<T> = UnionToIntersection14042<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14042<T extends unknown[], V> = [...T, V];

type TuplifyUnion14042<T, L = LastOf14042<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14042<TuplifyUnion14042<Exclude<T, L>>, L>;

type DeepPartial14042<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14042<T[P]> }
  : T;

type Paths14042<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14042<K, Paths14042<T[K], Prev14042[D]>> : never }[keyof T]
  : never;

type Prev14042 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14042<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14042 {
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

type ConfigPaths14042 = Paths14042<NestedConfig14042>;

interface HeavyProps14042 {
  config: DeepPartial14042<NestedConfig14042>;
  path?: ConfigPaths14042;
}

const HeavyComponent14042 = memo(function HeavyComponent14042({ config }: HeavyProps14042) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14042) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14042 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14042: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14042.displayName = 'HeavyComponent14042';
export default HeavyComponent14042;
