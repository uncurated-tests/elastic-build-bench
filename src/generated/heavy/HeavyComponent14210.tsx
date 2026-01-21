'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14210<T> = T extends (infer U)[]
  ? DeepReadonlyArray14210<U>
  : T extends object
  ? DeepReadonlyObject14210<T>
  : T;

interface DeepReadonlyArray14210<T> extends ReadonlyArray<DeepReadonly14210<T>> {}

type DeepReadonlyObject14210<T> = {
  readonly [P in keyof T]: DeepReadonly14210<T[P]>;
};

type UnionToIntersection14210<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14210<T> = UnionToIntersection14210<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14210<T extends unknown[], V> = [...T, V];

type TuplifyUnion14210<T, L = LastOf14210<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14210<TuplifyUnion14210<Exclude<T, L>>, L>;

type DeepPartial14210<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14210<T[P]> }
  : T;

type Paths14210<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14210<K, Paths14210<T[K], Prev14210[D]>> : never }[keyof T]
  : never;

type Prev14210 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14210<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14210 {
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

type ConfigPaths14210 = Paths14210<NestedConfig14210>;

interface HeavyProps14210 {
  config: DeepPartial14210<NestedConfig14210>;
  path?: ConfigPaths14210;
}

const HeavyComponent14210 = memo(function HeavyComponent14210({ config }: HeavyProps14210) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14210) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14210 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14210: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14210.displayName = 'HeavyComponent14210';
export default HeavyComponent14210;
