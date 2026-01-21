'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14102<T> = T extends (infer U)[]
  ? DeepReadonlyArray14102<U>
  : T extends object
  ? DeepReadonlyObject14102<T>
  : T;

interface DeepReadonlyArray14102<T> extends ReadonlyArray<DeepReadonly14102<T>> {}

type DeepReadonlyObject14102<T> = {
  readonly [P in keyof T]: DeepReadonly14102<T[P]>;
};

type UnionToIntersection14102<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14102<T> = UnionToIntersection14102<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14102<T extends unknown[], V> = [...T, V];

type TuplifyUnion14102<T, L = LastOf14102<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14102<TuplifyUnion14102<Exclude<T, L>>, L>;

type DeepPartial14102<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14102<T[P]> }
  : T;

type Paths14102<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14102<K, Paths14102<T[K], Prev14102[D]>> : never }[keyof T]
  : never;

type Prev14102 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14102<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14102 {
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

type ConfigPaths14102 = Paths14102<NestedConfig14102>;

interface HeavyProps14102 {
  config: DeepPartial14102<NestedConfig14102>;
  path?: ConfigPaths14102;
}

const HeavyComponent14102 = memo(function HeavyComponent14102({ config }: HeavyProps14102) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14102) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14102 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14102: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14102.displayName = 'HeavyComponent14102';
export default HeavyComponent14102;
