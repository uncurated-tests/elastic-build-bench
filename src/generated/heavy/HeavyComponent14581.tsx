'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14581<T> = T extends (infer U)[]
  ? DeepReadonlyArray14581<U>
  : T extends object
  ? DeepReadonlyObject14581<T>
  : T;

interface DeepReadonlyArray14581<T> extends ReadonlyArray<DeepReadonly14581<T>> {}

type DeepReadonlyObject14581<T> = {
  readonly [P in keyof T]: DeepReadonly14581<T[P]>;
};

type UnionToIntersection14581<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14581<T> = UnionToIntersection14581<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14581<T extends unknown[], V> = [...T, V];

type TuplifyUnion14581<T, L = LastOf14581<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14581<TuplifyUnion14581<Exclude<T, L>>, L>;

type DeepPartial14581<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14581<T[P]> }
  : T;

type Paths14581<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14581<K, Paths14581<T[K], Prev14581[D]>> : never }[keyof T]
  : never;

type Prev14581 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14581<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14581 {
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

type ConfigPaths14581 = Paths14581<NestedConfig14581>;

interface HeavyProps14581 {
  config: DeepPartial14581<NestedConfig14581>;
  path?: ConfigPaths14581;
}

const HeavyComponent14581 = memo(function HeavyComponent14581({ config }: HeavyProps14581) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14581) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14581 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14581: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14581.displayName = 'HeavyComponent14581';
export default HeavyComponent14581;
