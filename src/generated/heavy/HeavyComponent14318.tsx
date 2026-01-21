'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14318<T> = T extends (infer U)[]
  ? DeepReadonlyArray14318<U>
  : T extends object
  ? DeepReadonlyObject14318<T>
  : T;

interface DeepReadonlyArray14318<T> extends ReadonlyArray<DeepReadonly14318<T>> {}

type DeepReadonlyObject14318<T> = {
  readonly [P in keyof T]: DeepReadonly14318<T[P]>;
};

type UnionToIntersection14318<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14318<T> = UnionToIntersection14318<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14318<T extends unknown[], V> = [...T, V];

type TuplifyUnion14318<T, L = LastOf14318<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14318<TuplifyUnion14318<Exclude<T, L>>, L>;

type DeepPartial14318<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14318<T[P]> }
  : T;

type Paths14318<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14318<K, Paths14318<T[K], Prev14318[D]>> : never }[keyof T]
  : never;

type Prev14318 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14318<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14318 {
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

type ConfigPaths14318 = Paths14318<NestedConfig14318>;

interface HeavyProps14318 {
  config: DeepPartial14318<NestedConfig14318>;
  path?: ConfigPaths14318;
}

const HeavyComponent14318 = memo(function HeavyComponent14318({ config }: HeavyProps14318) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14318) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14318 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14318: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14318.displayName = 'HeavyComponent14318';
export default HeavyComponent14318;
