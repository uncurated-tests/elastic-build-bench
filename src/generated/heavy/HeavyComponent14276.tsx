'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14276<T> = T extends (infer U)[]
  ? DeepReadonlyArray14276<U>
  : T extends object
  ? DeepReadonlyObject14276<T>
  : T;

interface DeepReadonlyArray14276<T> extends ReadonlyArray<DeepReadonly14276<T>> {}

type DeepReadonlyObject14276<T> = {
  readonly [P in keyof T]: DeepReadonly14276<T[P]>;
};

type UnionToIntersection14276<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14276<T> = UnionToIntersection14276<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14276<T extends unknown[], V> = [...T, V];

type TuplifyUnion14276<T, L = LastOf14276<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14276<TuplifyUnion14276<Exclude<T, L>>, L>;

type DeepPartial14276<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14276<T[P]> }
  : T;

type Paths14276<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14276<K, Paths14276<T[K], Prev14276[D]>> : never }[keyof T]
  : never;

type Prev14276 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14276<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14276 {
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

type ConfigPaths14276 = Paths14276<NestedConfig14276>;

interface HeavyProps14276 {
  config: DeepPartial14276<NestedConfig14276>;
  path?: ConfigPaths14276;
}

const HeavyComponent14276 = memo(function HeavyComponent14276({ config }: HeavyProps14276) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14276) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14276 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14276: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14276.displayName = 'HeavyComponent14276';
export default HeavyComponent14276;
