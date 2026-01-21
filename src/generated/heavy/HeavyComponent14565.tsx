'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14565<T> = T extends (infer U)[]
  ? DeepReadonlyArray14565<U>
  : T extends object
  ? DeepReadonlyObject14565<T>
  : T;

interface DeepReadonlyArray14565<T> extends ReadonlyArray<DeepReadonly14565<T>> {}

type DeepReadonlyObject14565<T> = {
  readonly [P in keyof T]: DeepReadonly14565<T[P]>;
};

type UnionToIntersection14565<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14565<T> = UnionToIntersection14565<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14565<T extends unknown[], V> = [...T, V];

type TuplifyUnion14565<T, L = LastOf14565<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14565<TuplifyUnion14565<Exclude<T, L>>, L>;

type DeepPartial14565<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14565<T[P]> }
  : T;

type Paths14565<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14565<K, Paths14565<T[K], Prev14565[D]>> : never }[keyof T]
  : never;

type Prev14565 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14565<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14565 {
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

type ConfigPaths14565 = Paths14565<NestedConfig14565>;

interface HeavyProps14565 {
  config: DeepPartial14565<NestedConfig14565>;
  path?: ConfigPaths14565;
}

const HeavyComponent14565 = memo(function HeavyComponent14565({ config }: HeavyProps14565) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14565) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14565 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14565: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14565.displayName = 'HeavyComponent14565';
export default HeavyComponent14565;
