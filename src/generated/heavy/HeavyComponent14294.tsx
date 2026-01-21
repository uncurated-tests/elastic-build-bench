'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14294<T> = T extends (infer U)[]
  ? DeepReadonlyArray14294<U>
  : T extends object
  ? DeepReadonlyObject14294<T>
  : T;

interface DeepReadonlyArray14294<T> extends ReadonlyArray<DeepReadonly14294<T>> {}

type DeepReadonlyObject14294<T> = {
  readonly [P in keyof T]: DeepReadonly14294<T[P]>;
};

type UnionToIntersection14294<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14294<T> = UnionToIntersection14294<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14294<T extends unknown[], V> = [...T, V];

type TuplifyUnion14294<T, L = LastOf14294<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14294<TuplifyUnion14294<Exclude<T, L>>, L>;

type DeepPartial14294<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14294<T[P]> }
  : T;

type Paths14294<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14294<K, Paths14294<T[K], Prev14294[D]>> : never }[keyof T]
  : never;

type Prev14294 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14294<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14294 {
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

type ConfigPaths14294 = Paths14294<NestedConfig14294>;

interface HeavyProps14294 {
  config: DeepPartial14294<NestedConfig14294>;
  path?: ConfigPaths14294;
}

const HeavyComponent14294 = memo(function HeavyComponent14294({ config }: HeavyProps14294) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14294) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14294 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14294: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14294.displayName = 'HeavyComponent14294';
export default HeavyComponent14294;
