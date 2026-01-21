'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14955<T> = T extends (infer U)[]
  ? DeepReadonlyArray14955<U>
  : T extends object
  ? DeepReadonlyObject14955<T>
  : T;

interface DeepReadonlyArray14955<T> extends ReadonlyArray<DeepReadonly14955<T>> {}

type DeepReadonlyObject14955<T> = {
  readonly [P in keyof T]: DeepReadonly14955<T[P]>;
};

type UnionToIntersection14955<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14955<T> = UnionToIntersection14955<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14955<T extends unknown[], V> = [...T, V];

type TuplifyUnion14955<T, L = LastOf14955<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14955<TuplifyUnion14955<Exclude<T, L>>, L>;

type DeepPartial14955<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14955<T[P]> }
  : T;

type Paths14955<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14955<K, Paths14955<T[K], Prev14955[D]>> : never }[keyof T]
  : never;

type Prev14955 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14955<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14955 {
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

type ConfigPaths14955 = Paths14955<NestedConfig14955>;

interface HeavyProps14955 {
  config: DeepPartial14955<NestedConfig14955>;
  path?: ConfigPaths14955;
}

const HeavyComponent14955 = memo(function HeavyComponent14955({ config }: HeavyProps14955) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14955) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14955 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14955: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14955.displayName = 'HeavyComponent14955';
export default HeavyComponent14955;
