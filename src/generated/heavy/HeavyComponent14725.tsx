'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14725<T> = T extends (infer U)[]
  ? DeepReadonlyArray14725<U>
  : T extends object
  ? DeepReadonlyObject14725<T>
  : T;

interface DeepReadonlyArray14725<T> extends ReadonlyArray<DeepReadonly14725<T>> {}

type DeepReadonlyObject14725<T> = {
  readonly [P in keyof T]: DeepReadonly14725<T[P]>;
};

type UnionToIntersection14725<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14725<T> = UnionToIntersection14725<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14725<T extends unknown[], V> = [...T, V];

type TuplifyUnion14725<T, L = LastOf14725<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14725<TuplifyUnion14725<Exclude<T, L>>, L>;

type DeepPartial14725<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14725<T[P]> }
  : T;

type Paths14725<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14725<K, Paths14725<T[K], Prev14725[D]>> : never }[keyof T]
  : never;

type Prev14725 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14725<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14725 {
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

type ConfigPaths14725 = Paths14725<NestedConfig14725>;

interface HeavyProps14725 {
  config: DeepPartial14725<NestedConfig14725>;
  path?: ConfigPaths14725;
}

const HeavyComponent14725 = memo(function HeavyComponent14725({ config }: HeavyProps14725) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14725) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14725 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14725: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14725.displayName = 'HeavyComponent14725';
export default HeavyComponent14725;
