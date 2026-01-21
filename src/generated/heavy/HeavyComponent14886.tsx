'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14886<T> = T extends (infer U)[]
  ? DeepReadonlyArray14886<U>
  : T extends object
  ? DeepReadonlyObject14886<T>
  : T;

interface DeepReadonlyArray14886<T> extends ReadonlyArray<DeepReadonly14886<T>> {}

type DeepReadonlyObject14886<T> = {
  readonly [P in keyof T]: DeepReadonly14886<T[P]>;
};

type UnionToIntersection14886<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14886<T> = UnionToIntersection14886<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14886<T extends unknown[], V> = [...T, V];

type TuplifyUnion14886<T, L = LastOf14886<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14886<TuplifyUnion14886<Exclude<T, L>>, L>;

type DeepPartial14886<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14886<T[P]> }
  : T;

type Paths14886<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14886<K, Paths14886<T[K], Prev14886[D]>> : never }[keyof T]
  : never;

type Prev14886 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14886<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14886 {
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

type ConfigPaths14886 = Paths14886<NestedConfig14886>;

interface HeavyProps14886 {
  config: DeepPartial14886<NestedConfig14886>;
  path?: ConfigPaths14886;
}

const HeavyComponent14886 = memo(function HeavyComponent14886({ config }: HeavyProps14886) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14886) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14886 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14886: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14886.displayName = 'HeavyComponent14886';
export default HeavyComponent14886;
