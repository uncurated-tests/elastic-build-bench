'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14615<T> = T extends (infer U)[]
  ? DeepReadonlyArray14615<U>
  : T extends object
  ? DeepReadonlyObject14615<T>
  : T;

interface DeepReadonlyArray14615<T> extends ReadonlyArray<DeepReadonly14615<T>> {}

type DeepReadonlyObject14615<T> = {
  readonly [P in keyof T]: DeepReadonly14615<T[P]>;
};

type UnionToIntersection14615<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14615<T> = UnionToIntersection14615<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14615<T extends unknown[], V> = [...T, V];

type TuplifyUnion14615<T, L = LastOf14615<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14615<TuplifyUnion14615<Exclude<T, L>>, L>;

type DeepPartial14615<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14615<T[P]> }
  : T;

type Paths14615<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14615<K, Paths14615<T[K], Prev14615[D]>> : never }[keyof T]
  : never;

type Prev14615 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14615<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14615 {
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

type ConfigPaths14615 = Paths14615<NestedConfig14615>;

interface HeavyProps14615 {
  config: DeepPartial14615<NestedConfig14615>;
  path?: ConfigPaths14615;
}

const HeavyComponent14615 = memo(function HeavyComponent14615({ config }: HeavyProps14615) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14615) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14615 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14615: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14615.displayName = 'HeavyComponent14615';
export default HeavyComponent14615;
