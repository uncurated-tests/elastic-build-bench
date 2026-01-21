'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14357<T> = T extends (infer U)[]
  ? DeepReadonlyArray14357<U>
  : T extends object
  ? DeepReadonlyObject14357<T>
  : T;

interface DeepReadonlyArray14357<T> extends ReadonlyArray<DeepReadonly14357<T>> {}

type DeepReadonlyObject14357<T> = {
  readonly [P in keyof T]: DeepReadonly14357<T[P]>;
};

type UnionToIntersection14357<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14357<T> = UnionToIntersection14357<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14357<T extends unknown[], V> = [...T, V];

type TuplifyUnion14357<T, L = LastOf14357<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14357<TuplifyUnion14357<Exclude<T, L>>, L>;

type DeepPartial14357<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14357<T[P]> }
  : T;

type Paths14357<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14357<K, Paths14357<T[K], Prev14357[D]>> : never }[keyof T]
  : never;

type Prev14357 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14357<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14357 {
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

type ConfigPaths14357 = Paths14357<NestedConfig14357>;

interface HeavyProps14357 {
  config: DeepPartial14357<NestedConfig14357>;
  path?: ConfigPaths14357;
}

const HeavyComponent14357 = memo(function HeavyComponent14357({ config }: HeavyProps14357) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14357) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14357 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14357: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14357.displayName = 'HeavyComponent14357';
export default HeavyComponent14357;
