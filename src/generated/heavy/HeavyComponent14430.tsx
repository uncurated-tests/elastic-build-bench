'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14430<T> = T extends (infer U)[]
  ? DeepReadonlyArray14430<U>
  : T extends object
  ? DeepReadonlyObject14430<T>
  : T;

interface DeepReadonlyArray14430<T> extends ReadonlyArray<DeepReadonly14430<T>> {}

type DeepReadonlyObject14430<T> = {
  readonly [P in keyof T]: DeepReadonly14430<T[P]>;
};

type UnionToIntersection14430<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14430<T> = UnionToIntersection14430<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14430<T extends unknown[], V> = [...T, V];

type TuplifyUnion14430<T, L = LastOf14430<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14430<TuplifyUnion14430<Exclude<T, L>>, L>;

type DeepPartial14430<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14430<T[P]> }
  : T;

type Paths14430<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14430<K, Paths14430<T[K], Prev14430[D]>> : never }[keyof T]
  : never;

type Prev14430 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14430<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14430 {
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

type ConfigPaths14430 = Paths14430<NestedConfig14430>;

interface HeavyProps14430 {
  config: DeepPartial14430<NestedConfig14430>;
  path?: ConfigPaths14430;
}

const HeavyComponent14430 = memo(function HeavyComponent14430({ config }: HeavyProps14430) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14430) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14430 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14430: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14430.displayName = 'HeavyComponent14430';
export default HeavyComponent14430;
