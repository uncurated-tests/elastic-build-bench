'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14433<T> = T extends (infer U)[]
  ? DeepReadonlyArray14433<U>
  : T extends object
  ? DeepReadonlyObject14433<T>
  : T;

interface DeepReadonlyArray14433<T> extends ReadonlyArray<DeepReadonly14433<T>> {}

type DeepReadonlyObject14433<T> = {
  readonly [P in keyof T]: DeepReadonly14433<T[P]>;
};

type UnionToIntersection14433<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14433<T> = UnionToIntersection14433<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14433<T extends unknown[], V> = [...T, V];

type TuplifyUnion14433<T, L = LastOf14433<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14433<TuplifyUnion14433<Exclude<T, L>>, L>;

type DeepPartial14433<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14433<T[P]> }
  : T;

type Paths14433<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14433<K, Paths14433<T[K], Prev14433[D]>> : never }[keyof T]
  : never;

type Prev14433 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14433<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14433 {
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

type ConfigPaths14433 = Paths14433<NestedConfig14433>;

interface HeavyProps14433 {
  config: DeepPartial14433<NestedConfig14433>;
  path?: ConfigPaths14433;
}

const HeavyComponent14433 = memo(function HeavyComponent14433({ config }: HeavyProps14433) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14433) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14433 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14433: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14433.displayName = 'HeavyComponent14433';
export default HeavyComponent14433;
