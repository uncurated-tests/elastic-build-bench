'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14764<T> = T extends (infer U)[]
  ? DeepReadonlyArray14764<U>
  : T extends object
  ? DeepReadonlyObject14764<T>
  : T;

interface DeepReadonlyArray14764<T> extends ReadonlyArray<DeepReadonly14764<T>> {}

type DeepReadonlyObject14764<T> = {
  readonly [P in keyof T]: DeepReadonly14764<T[P]>;
};

type UnionToIntersection14764<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14764<T> = UnionToIntersection14764<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14764<T extends unknown[], V> = [...T, V];

type TuplifyUnion14764<T, L = LastOf14764<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14764<TuplifyUnion14764<Exclude<T, L>>, L>;

type DeepPartial14764<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14764<T[P]> }
  : T;

type Paths14764<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14764<K, Paths14764<T[K], Prev14764[D]>> : never }[keyof T]
  : never;

type Prev14764 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14764<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14764 {
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

type ConfigPaths14764 = Paths14764<NestedConfig14764>;

interface HeavyProps14764 {
  config: DeepPartial14764<NestedConfig14764>;
  path?: ConfigPaths14764;
}

const HeavyComponent14764 = memo(function HeavyComponent14764({ config }: HeavyProps14764) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14764) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14764 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14764: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14764.displayName = 'HeavyComponent14764';
export default HeavyComponent14764;
