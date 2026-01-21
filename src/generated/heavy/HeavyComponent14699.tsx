'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14699<T> = T extends (infer U)[]
  ? DeepReadonlyArray14699<U>
  : T extends object
  ? DeepReadonlyObject14699<T>
  : T;

interface DeepReadonlyArray14699<T> extends ReadonlyArray<DeepReadonly14699<T>> {}

type DeepReadonlyObject14699<T> = {
  readonly [P in keyof T]: DeepReadonly14699<T[P]>;
};

type UnionToIntersection14699<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14699<T> = UnionToIntersection14699<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14699<T extends unknown[], V> = [...T, V];

type TuplifyUnion14699<T, L = LastOf14699<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14699<TuplifyUnion14699<Exclude<T, L>>, L>;

type DeepPartial14699<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14699<T[P]> }
  : T;

type Paths14699<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14699<K, Paths14699<T[K], Prev14699[D]>> : never }[keyof T]
  : never;

type Prev14699 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14699<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14699 {
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

type ConfigPaths14699 = Paths14699<NestedConfig14699>;

interface HeavyProps14699 {
  config: DeepPartial14699<NestedConfig14699>;
  path?: ConfigPaths14699;
}

const HeavyComponent14699 = memo(function HeavyComponent14699({ config }: HeavyProps14699) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14699) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14699 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14699: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14699.displayName = 'HeavyComponent14699';
export default HeavyComponent14699;
