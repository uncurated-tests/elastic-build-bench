'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14246<T> = T extends (infer U)[]
  ? DeepReadonlyArray14246<U>
  : T extends object
  ? DeepReadonlyObject14246<T>
  : T;

interface DeepReadonlyArray14246<T> extends ReadonlyArray<DeepReadonly14246<T>> {}

type DeepReadonlyObject14246<T> = {
  readonly [P in keyof T]: DeepReadonly14246<T[P]>;
};

type UnionToIntersection14246<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14246<T> = UnionToIntersection14246<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14246<T extends unknown[], V> = [...T, V];

type TuplifyUnion14246<T, L = LastOf14246<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14246<TuplifyUnion14246<Exclude<T, L>>, L>;

type DeepPartial14246<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14246<T[P]> }
  : T;

type Paths14246<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14246<K, Paths14246<T[K], Prev14246[D]>> : never }[keyof T]
  : never;

type Prev14246 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14246<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14246 {
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

type ConfigPaths14246 = Paths14246<NestedConfig14246>;

interface HeavyProps14246 {
  config: DeepPartial14246<NestedConfig14246>;
  path?: ConfigPaths14246;
}

const HeavyComponent14246 = memo(function HeavyComponent14246({ config }: HeavyProps14246) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14246) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14246 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14246: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14246.displayName = 'HeavyComponent14246';
export default HeavyComponent14246;
