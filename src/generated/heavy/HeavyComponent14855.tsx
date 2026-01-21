'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14855<T> = T extends (infer U)[]
  ? DeepReadonlyArray14855<U>
  : T extends object
  ? DeepReadonlyObject14855<T>
  : T;

interface DeepReadonlyArray14855<T> extends ReadonlyArray<DeepReadonly14855<T>> {}

type DeepReadonlyObject14855<T> = {
  readonly [P in keyof T]: DeepReadonly14855<T[P]>;
};

type UnionToIntersection14855<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14855<T> = UnionToIntersection14855<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14855<T extends unknown[], V> = [...T, V];

type TuplifyUnion14855<T, L = LastOf14855<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14855<TuplifyUnion14855<Exclude<T, L>>, L>;

type DeepPartial14855<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14855<T[P]> }
  : T;

type Paths14855<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14855<K, Paths14855<T[K], Prev14855[D]>> : never }[keyof T]
  : never;

type Prev14855 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14855<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14855 {
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

type ConfigPaths14855 = Paths14855<NestedConfig14855>;

interface HeavyProps14855 {
  config: DeepPartial14855<NestedConfig14855>;
  path?: ConfigPaths14855;
}

const HeavyComponent14855 = memo(function HeavyComponent14855({ config }: HeavyProps14855) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14855) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14855 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14855: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14855.displayName = 'HeavyComponent14855';
export default HeavyComponent14855;
