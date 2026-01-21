'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14<T> = T extends (infer U)[]
  ? DeepReadonlyArray14<U>
  : T extends object
  ? DeepReadonlyObject14<T>
  : T;

interface DeepReadonlyArray14<T> extends ReadonlyArray<DeepReadonly14<T>> {}

type DeepReadonlyObject14<T> = {
  readonly [P in keyof T]: DeepReadonly14<T[P]>;
};

type UnionToIntersection14<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14<T> = UnionToIntersection14<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14<T extends unknown[], V> = [...T, V];

type TuplifyUnion14<T, L = LastOf14<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14<TuplifyUnion14<Exclude<T, L>>, L>;

type DeepPartial14<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14<T[P]> }
  : T;

type Paths14<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14<K, Paths14<T[K], Prev14[D]>> : never }[keyof T]
  : never;

type Prev14 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14 {
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

type ConfigPaths14 = Paths14<NestedConfig14>;

interface HeavyProps14 {
  config: DeepPartial14<NestedConfig14>;
  path?: ConfigPaths14;
}

const HeavyComponent14 = memo(function HeavyComponent14({ config }: HeavyProps14) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14.displayName = 'HeavyComponent14';
export default HeavyComponent14;
