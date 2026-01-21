'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14066<T> = T extends (infer U)[]
  ? DeepReadonlyArray14066<U>
  : T extends object
  ? DeepReadonlyObject14066<T>
  : T;

interface DeepReadonlyArray14066<T> extends ReadonlyArray<DeepReadonly14066<T>> {}

type DeepReadonlyObject14066<T> = {
  readonly [P in keyof T]: DeepReadonly14066<T[P]>;
};

type UnionToIntersection14066<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14066<T> = UnionToIntersection14066<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14066<T extends unknown[], V> = [...T, V];

type TuplifyUnion14066<T, L = LastOf14066<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14066<TuplifyUnion14066<Exclude<T, L>>, L>;

type DeepPartial14066<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14066<T[P]> }
  : T;

type Paths14066<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14066<K, Paths14066<T[K], Prev14066[D]>> : never }[keyof T]
  : never;

type Prev14066 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14066<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14066 {
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

type ConfigPaths14066 = Paths14066<NestedConfig14066>;

interface HeavyProps14066 {
  config: DeepPartial14066<NestedConfig14066>;
  path?: ConfigPaths14066;
}

const HeavyComponent14066 = memo(function HeavyComponent14066({ config }: HeavyProps14066) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14066) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14066 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14066: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14066.displayName = 'HeavyComponent14066';
export default HeavyComponent14066;
