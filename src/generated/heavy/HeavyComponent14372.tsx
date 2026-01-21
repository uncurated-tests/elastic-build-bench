'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14372<T> = T extends (infer U)[]
  ? DeepReadonlyArray14372<U>
  : T extends object
  ? DeepReadonlyObject14372<T>
  : T;

interface DeepReadonlyArray14372<T> extends ReadonlyArray<DeepReadonly14372<T>> {}

type DeepReadonlyObject14372<T> = {
  readonly [P in keyof T]: DeepReadonly14372<T[P]>;
};

type UnionToIntersection14372<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14372<T> = UnionToIntersection14372<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14372<T extends unknown[], V> = [...T, V];

type TuplifyUnion14372<T, L = LastOf14372<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14372<TuplifyUnion14372<Exclude<T, L>>, L>;

type DeepPartial14372<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14372<T[P]> }
  : T;

type Paths14372<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14372<K, Paths14372<T[K], Prev14372[D]>> : never }[keyof T]
  : never;

type Prev14372 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14372<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14372 {
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

type ConfigPaths14372 = Paths14372<NestedConfig14372>;

interface HeavyProps14372 {
  config: DeepPartial14372<NestedConfig14372>;
  path?: ConfigPaths14372;
}

const HeavyComponent14372 = memo(function HeavyComponent14372({ config }: HeavyProps14372) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14372) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14372 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14372: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14372.displayName = 'HeavyComponent14372';
export default HeavyComponent14372;
