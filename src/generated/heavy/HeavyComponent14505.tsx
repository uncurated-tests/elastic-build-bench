'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14505<T> = T extends (infer U)[]
  ? DeepReadonlyArray14505<U>
  : T extends object
  ? DeepReadonlyObject14505<T>
  : T;

interface DeepReadonlyArray14505<T> extends ReadonlyArray<DeepReadonly14505<T>> {}

type DeepReadonlyObject14505<T> = {
  readonly [P in keyof T]: DeepReadonly14505<T[P]>;
};

type UnionToIntersection14505<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14505<T> = UnionToIntersection14505<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14505<T extends unknown[], V> = [...T, V];

type TuplifyUnion14505<T, L = LastOf14505<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14505<TuplifyUnion14505<Exclude<T, L>>, L>;

type DeepPartial14505<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14505<T[P]> }
  : T;

type Paths14505<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14505<K, Paths14505<T[K], Prev14505[D]>> : never }[keyof T]
  : never;

type Prev14505 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14505<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14505 {
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

type ConfigPaths14505 = Paths14505<NestedConfig14505>;

interface HeavyProps14505 {
  config: DeepPartial14505<NestedConfig14505>;
  path?: ConfigPaths14505;
}

const HeavyComponent14505 = memo(function HeavyComponent14505({ config }: HeavyProps14505) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14505) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14505 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14505: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14505.displayName = 'HeavyComponent14505';
export default HeavyComponent14505;
