'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14193<T> = T extends (infer U)[]
  ? DeepReadonlyArray14193<U>
  : T extends object
  ? DeepReadonlyObject14193<T>
  : T;

interface DeepReadonlyArray14193<T> extends ReadonlyArray<DeepReadonly14193<T>> {}

type DeepReadonlyObject14193<T> = {
  readonly [P in keyof T]: DeepReadonly14193<T[P]>;
};

type UnionToIntersection14193<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14193<T> = UnionToIntersection14193<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14193<T extends unknown[], V> = [...T, V];

type TuplifyUnion14193<T, L = LastOf14193<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14193<TuplifyUnion14193<Exclude<T, L>>, L>;

type DeepPartial14193<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14193<T[P]> }
  : T;

type Paths14193<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14193<K, Paths14193<T[K], Prev14193[D]>> : never }[keyof T]
  : never;

type Prev14193 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14193<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14193 {
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

type ConfigPaths14193 = Paths14193<NestedConfig14193>;

interface HeavyProps14193 {
  config: DeepPartial14193<NestedConfig14193>;
  path?: ConfigPaths14193;
}

const HeavyComponent14193 = memo(function HeavyComponent14193({ config }: HeavyProps14193) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14193) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14193 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14193: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14193.displayName = 'HeavyComponent14193';
export default HeavyComponent14193;
