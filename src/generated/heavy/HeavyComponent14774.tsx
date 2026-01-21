'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14774<T> = T extends (infer U)[]
  ? DeepReadonlyArray14774<U>
  : T extends object
  ? DeepReadonlyObject14774<T>
  : T;

interface DeepReadonlyArray14774<T> extends ReadonlyArray<DeepReadonly14774<T>> {}

type DeepReadonlyObject14774<T> = {
  readonly [P in keyof T]: DeepReadonly14774<T[P]>;
};

type UnionToIntersection14774<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14774<T> = UnionToIntersection14774<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14774<T extends unknown[], V> = [...T, V];

type TuplifyUnion14774<T, L = LastOf14774<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14774<TuplifyUnion14774<Exclude<T, L>>, L>;

type DeepPartial14774<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14774<T[P]> }
  : T;

type Paths14774<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14774<K, Paths14774<T[K], Prev14774[D]>> : never }[keyof T]
  : never;

type Prev14774 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14774<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14774 {
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

type ConfigPaths14774 = Paths14774<NestedConfig14774>;

interface HeavyProps14774 {
  config: DeepPartial14774<NestedConfig14774>;
  path?: ConfigPaths14774;
}

const HeavyComponent14774 = memo(function HeavyComponent14774({ config }: HeavyProps14774) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14774) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14774 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14774: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14774.displayName = 'HeavyComponent14774';
export default HeavyComponent14774;
