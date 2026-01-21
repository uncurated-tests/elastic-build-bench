'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14472<T> = T extends (infer U)[]
  ? DeepReadonlyArray14472<U>
  : T extends object
  ? DeepReadonlyObject14472<T>
  : T;

interface DeepReadonlyArray14472<T> extends ReadonlyArray<DeepReadonly14472<T>> {}

type DeepReadonlyObject14472<T> = {
  readonly [P in keyof T]: DeepReadonly14472<T[P]>;
};

type UnionToIntersection14472<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14472<T> = UnionToIntersection14472<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14472<T extends unknown[], V> = [...T, V];

type TuplifyUnion14472<T, L = LastOf14472<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14472<TuplifyUnion14472<Exclude<T, L>>, L>;

type DeepPartial14472<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14472<T[P]> }
  : T;

type Paths14472<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14472<K, Paths14472<T[K], Prev14472[D]>> : never }[keyof T]
  : never;

type Prev14472 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14472<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14472 {
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

type ConfigPaths14472 = Paths14472<NestedConfig14472>;

interface HeavyProps14472 {
  config: DeepPartial14472<NestedConfig14472>;
  path?: ConfigPaths14472;
}

const HeavyComponent14472 = memo(function HeavyComponent14472({ config }: HeavyProps14472) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14472) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14472 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14472: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14472.displayName = 'HeavyComponent14472';
export default HeavyComponent14472;
