'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14853<T> = T extends (infer U)[]
  ? DeepReadonlyArray14853<U>
  : T extends object
  ? DeepReadonlyObject14853<T>
  : T;

interface DeepReadonlyArray14853<T> extends ReadonlyArray<DeepReadonly14853<T>> {}

type DeepReadonlyObject14853<T> = {
  readonly [P in keyof T]: DeepReadonly14853<T[P]>;
};

type UnionToIntersection14853<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14853<T> = UnionToIntersection14853<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14853<T extends unknown[], V> = [...T, V];

type TuplifyUnion14853<T, L = LastOf14853<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14853<TuplifyUnion14853<Exclude<T, L>>, L>;

type DeepPartial14853<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14853<T[P]> }
  : T;

type Paths14853<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14853<K, Paths14853<T[K], Prev14853[D]>> : never }[keyof T]
  : never;

type Prev14853 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14853<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14853 {
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

type ConfigPaths14853 = Paths14853<NestedConfig14853>;

interface HeavyProps14853 {
  config: DeepPartial14853<NestedConfig14853>;
  path?: ConfigPaths14853;
}

const HeavyComponent14853 = memo(function HeavyComponent14853({ config }: HeavyProps14853) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14853) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14853 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14853: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14853.displayName = 'HeavyComponent14853';
export default HeavyComponent14853;
