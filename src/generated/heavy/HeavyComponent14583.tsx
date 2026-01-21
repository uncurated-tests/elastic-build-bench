'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14583<T> = T extends (infer U)[]
  ? DeepReadonlyArray14583<U>
  : T extends object
  ? DeepReadonlyObject14583<T>
  : T;

interface DeepReadonlyArray14583<T> extends ReadonlyArray<DeepReadonly14583<T>> {}

type DeepReadonlyObject14583<T> = {
  readonly [P in keyof T]: DeepReadonly14583<T[P]>;
};

type UnionToIntersection14583<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14583<T> = UnionToIntersection14583<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14583<T extends unknown[], V> = [...T, V];

type TuplifyUnion14583<T, L = LastOf14583<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14583<TuplifyUnion14583<Exclude<T, L>>, L>;

type DeepPartial14583<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14583<T[P]> }
  : T;

type Paths14583<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14583<K, Paths14583<T[K], Prev14583[D]>> : never }[keyof T]
  : never;

type Prev14583 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14583<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14583 {
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

type ConfigPaths14583 = Paths14583<NestedConfig14583>;

interface HeavyProps14583 {
  config: DeepPartial14583<NestedConfig14583>;
  path?: ConfigPaths14583;
}

const HeavyComponent14583 = memo(function HeavyComponent14583({ config }: HeavyProps14583) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14583) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14583 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14583: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14583.displayName = 'HeavyComponent14583';
export default HeavyComponent14583;
