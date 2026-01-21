'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14283<T> = T extends (infer U)[]
  ? DeepReadonlyArray14283<U>
  : T extends object
  ? DeepReadonlyObject14283<T>
  : T;

interface DeepReadonlyArray14283<T> extends ReadonlyArray<DeepReadonly14283<T>> {}

type DeepReadonlyObject14283<T> = {
  readonly [P in keyof T]: DeepReadonly14283<T[P]>;
};

type UnionToIntersection14283<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14283<T> = UnionToIntersection14283<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14283<T extends unknown[], V> = [...T, V];

type TuplifyUnion14283<T, L = LastOf14283<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14283<TuplifyUnion14283<Exclude<T, L>>, L>;

type DeepPartial14283<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14283<T[P]> }
  : T;

type Paths14283<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14283<K, Paths14283<T[K], Prev14283[D]>> : never }[keyof T]
  : never;

type Prev14283 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14283<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14283 {
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

type ConfigPaths14283 = Paths14283<NestedConfig14283>;

interface HeavyProps14283 {
  config: DeepPartial14283<NestedConfig14283>;
  path?: ConfigPaths14283;
}

const HeavyComponent14283 = memo(function HeavyComponent14283({ config }: HeavyProps14283) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14283) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14283 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14283: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14283.displayName = 'HeavyComponent14283';
export default HeavyComponent14283;
