'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14196<T> = T extends (infer U)[]
  ? DeepReadonlyArray14196<U>
  : T extends object
  ? DeepReadonlyObject14196<T>
  : T;

interface DeepReadonlyArray14196<T> extends ReadonlyArray<DeepReadonly14196<T>> {}

type DeepReadonlyObject14196<T> = {
  readonly [P in keyof T]: DeepReadonly14196<T[P]>;
};

type UnionToIntersection14196<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14196<T> = UnionToIntersection14196<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14196<T extends unknown[], V> = [...T, V];

type TuplifyUnion14196<T, L = LastOf14196<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14196<TuplifyUnion14196<Exclude<T, L>>, L>;

type DeepPartial14196<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14196<T[P]> }
  : T;

type Paths14196<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14196<K, Paths14196<T[K], Prev14196[D]>> : never }[keyof T]
  : never;

type Prev14196 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14196<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14196 {
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

type ConfigPaths14196 = Paths14196<NestedConfig14196>;

interface HeavyProps14196 {
  config: DeepPartial14196<NestedConfig14196>;
  path?: ConfigPaths14196;
}

const HeavyComponent14196 = memo(function HeavyComponent14196({ config }: HeavyProps14196) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14196) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14196 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14196: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14196.displayName = 'HeavyComponent14196';
export default HeavyComponent14196;
