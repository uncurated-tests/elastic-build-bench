'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14997<T> = T extends (infer U)[]
  ? DeepReadonlyArray14997<U>
  : T extends object
  ? DeepReadonlyObject14997<T>
  : T;

interface DeepReadonlyArray14997<T> extends ReadonlyArray<DeepReadonly14997<T>> {}

type DeepReadonlyObject14997<T> = {
  readonly [P in keyof T]: DeepReadonly14997<T[P]>;
};

type UnionToIntersection14997<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14997<T> = UnionToIntersection14997<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14997<T extends unknown[], V> = [...T, V];

type TuplifyUnion14997<T, L = LastOf14997<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14997<TuplifyUnion14997<Exclude<T, L>>, L>;

type DeepPartial14997<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14997<T[P]> }
  : T;

type Paths14997<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14997<K, Paths14997<T[K], Prev14997[D]>> : never }[keyof T]
  : never;

type Prev14997 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14997<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14997 {
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

type ConfigPaths14997 = Paths14997<NestedConfig14997>;

interface HeavyProps14997 {
  config: DeepPartial14997<NestedConfig14997>;
  path?: ConfigPaths14997;
}

const HeavyComponent14997 = memo(function HeavyComponent14997({ config }: HeavyProps14997) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14997) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14997 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14997: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14997.displayName = 'HeavyComponent14997';
export default HeavyComponent14997;
