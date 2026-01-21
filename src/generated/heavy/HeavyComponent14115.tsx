'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14115<T> = T extends (infer U)[]
  ? DeepReadonlyArray14115<U>
  : T extends object
  ? DeepReadonlyObject14115<T>
  : T;

interface DeepReadonlyArray14115<T> extends ReadonlyArray<DeepReadonly14115<T>> {}

type DeepReadonlyObject14115<T> = {
  readonly [P in keyof T]: DeepReadonly14115<T[P]>;
};

type UnionToIntersection14115<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14115<T> = UnionToIntersection14115<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14115<T extends unknown[], V> = [...T, V];

type TuplifyUnion14115<T, L = LastOf14115<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14115<TuplifyUnion14115<Exclude<T, L>>, L>;

type DeepPartial14115<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14115<T[P]> }
  : T;

type Paths14115<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14115<K, Paths14115<T[K], Prev14115[D]>> : never }[keyof T]
  : never;

type Prev14115 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14115<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14115 {
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

type ConfigPaths14115 = Paths14115<NestedConfig14115>;

interface HeavyProps14115 {
  config: DeepPartial14115<NestedConfig14115>;
  path?: ConfigPaths14115;
}

const HeavyComponent14115 = memo(function HeavyComponent14115({ config }: HeavyProps14115) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14115) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14115 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14115: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14115.displayName = 'HeavyComponent14115';
export default HeavyComponent14115;
