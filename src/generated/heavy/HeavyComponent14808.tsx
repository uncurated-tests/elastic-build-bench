'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14808<T> = T extends (infer U)[]
  ? DeepReadonlyArray14808<U>
  : T extends object
  ? DeepReadonlyObject14808<T>
  : T;

interface DeepReadonlyArray14808<T> extends ReadonlyArray<DeepReadonly14808<T>> {}

type DeepReadonlyObject14808<T> = {
  readonly [P in keyof T]: DeepReadonly14808<T[P]>;
};

type UnionToIntersection14808<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14808<T> = UnionToIntersection14808<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14808<T extends unknown[], V> = [...T, V];

type TuplifyUnion14808<T, L = LastOf14808<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14808<TuplifyUnion14808<Exclude<T, L>>, L>;

type DeepPartial14808<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14808<T[P]> }
  : T;

type Paths14808<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14808<K, Paths14808<T[K], Prev14808[D]>> : never }[keyof T]
  : never;

type Prev14808 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14808<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14808 {
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

type ConfigPaths14808 = Paths14808<NestedConfig14808>;

interface HeavyProps14808 {
  config: DeepPartial14808<NestedConfig14808>;
  path?: ConfigPaths14808;
}

const HeavyComponent14808 = memo(function HeavyComponent14808({ config }: HeavyProps14808) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14808) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14808 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14808: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14808.displayName = 'HeavyComponent14808';
export default HeavyComponent14808;
