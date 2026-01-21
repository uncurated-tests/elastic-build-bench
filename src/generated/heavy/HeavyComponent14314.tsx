'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14314<T> = T extends (infer U)[]
  ? DeepReadonlyArray14314<U>
  : T extends object
  ? DeepReadonlyObject14314<T>
  : T;

interface DeepReadonlyArray14314<T> extends ReadonlyArray<DeepReadonly14314<T>> {}

type DeepReadonlyObject14314<T> = {
  readonly [P in keyof T]: DeepReadonly14314<T[P]>;
};

type UnionToIntersection14314<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14314<T> = UnionToIntersection14314<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14314<T extends unknown[], V> = [...T, V];

type TuplifyUnion14314<T, L = LastOf14314<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14314<TuplifyUnion14314<Exclude<T, L>>, L>;

type DeepPartial14314<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14314<T[P]> }
  : T;

type Paths14314<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14314<K, Paths14314<T[K], Prev14314[D]>> : never }[keyof T]
  : never;

type Prev14314 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14314<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14314 {
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

type ConfigPaths14314 = Paths14314<NestedConfig14314>;

interface HeavyProps14314 {
  config: DeepPartial14314<NestedConfig14314>;
  path?: ConfigPaths14314;
}

const HeavyComponent14314 = memo(function HeavyComponent14314({ config }: HeavyProps14314) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14314) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14314 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14314: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14314.displayName = 'HeavyComponent14314';
export default HeavyComponent14314;
