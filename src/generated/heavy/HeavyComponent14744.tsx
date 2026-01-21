'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14744<T> = T extends (infer U)[]
  ? DeepReadonlyArray14744<U>
  : T extends object
  ? DeepReadonlyObject14744<T>
  : T;

interface DeepReadonlyArray14744<T> extends ReadonlyArray<DeepReadonly14744<T>> {}

type DeepReadonlyObject14744<T> = {
  readonly [P in keyof T]: DeepReadonly14744<T[P]>;
};

type UnionToIntersection14744<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14744<T> = UnionToIntersection14744<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14744<T extends unknown[], V> = [...T, V];

type TuplifyUnion14744<T, L = LastOf14744<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14744<TuplifyUnion14744<Exclude<T, L>>, L>;

type DeepPartial14744<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14744<T[P]> }
  : T;

type Paths14744<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14744<K, Paths14744<T[K], Prev14744[D]>> : never }[keyof T]
  : never;

type Prev14744 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14744<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14744 {
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

type ConfigPaths14744 = Paths14744<NestedConfig14744>;

interface HeavyProps14744 {
  config: DeepPartial14744<NestedConfig14744>;
  path?: ConfigPaths14744;
}

const HeavyComponent14744 = memo(function HeavyComponent14744({ config }: HeavyProps14744) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14744) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14744 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14744: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14744.displayName = 'HeavyComponent14744';
export default HeavyComponent14744;
