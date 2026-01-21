'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14847<T> = T extends (infer U)[]
  ? DeepReadonlyArray14847<U>
  : T extends object
  ? DeepReadonlyObject14847<T>
  : T;

interface DeepReadonlyArray14847<T> extends ReadonlyArray<DeepReadonly14847<T>> {}

type DeepReadonlyObject14847<T> = {
  readonly [P in keyof T]: DeepReadonly14847<T[P]>;
};

type UnionToIntersection14847<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14847<T> = UnionToIntersection14847<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14847<T extends unknown[], V> = [...T, V];

type TuplifyUnion14847<T, L = LastOf14847<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14847<TuplifyUnion14847<Exclude<T, L>>, L>;

type DeepPartial14847<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14847<T[P]> }
  : T;

type Paths14847<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14847<K, Paths14847<T[K], Prev14847[D]>> : never }[keyof T]
  : never;

type Prev14847 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14847<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14847 {
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

type ConfigPaths14847 = Paths14847<NestedConfig14847>;

interface HeavyProps14847 {
  config: DeepPartial14847<NestedConfig14847>;
  path?: ConfigPaths14847;
}

const HeavyComponent14847 = memo(function HeavyComponent14847({ config }: HeavyProps14847) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14847) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14847 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14847: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14847.displayName = 'HeavyComponent14847';
export default HeavyComponent14847;
