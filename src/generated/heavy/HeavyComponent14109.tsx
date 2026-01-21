'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14109<T> = T extends (infer U)[]
  ? DeepReadonlyArray14109<U>
  : T extends object
  ? DeepReadonlyObject14109<T>
  : T;

interface DeepReadonlyArray14109<T> extends ReadonlyArray<DeepReadonly14109<T>> {}

type DeepReadonlyObject14109<T> = {
  readonly [P in keyof T]: DeepReadonly14109<T[P]>;
};

type UnionToIntersection14109<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14109<T> = UnionToIntersection14109<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14109<T extends unknown[], V> = [...T, V];

type TuplifyUnion14109<T, L = LastOf14109<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14109<TuplifyUnion14109<Exclude<T, L>>, L>;

type DeepPartial14109<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14109<T[P]> }
  : T;

type Paths14109<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14109<K, Paths14109<T[K], Prev14109[D]>> : never }[keyof T]
  : never;

type Prev14109 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14109<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14109 {
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

type ConfigPaths14109 = Paths14109<NestedConfig14109>;

interface HeavyProps14109 {
  config: DeepPartial14109<NestedConfig14109>;
  path?: ConfigPaths14109;
}

const HeavyComponent14109 = memo(function HeavyComponent14109({ config }: HeavyProps14109) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14109) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14109 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14109: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14109.displayName = 'HeavyComponent14109';
export default HeavyComponent14109;
