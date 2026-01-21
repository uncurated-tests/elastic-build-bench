'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14623<T> = T extends (infer U)[]
  ? DeepReadonlyArray14623<U>
  : T extends object
  ? DeepReadonlyObject14623<T>
  : T;

interface DeepReadonlyArray14623<T> extends ReadonlyArray<DeepReadonly14623<T>> {}

type DeepReadonlyObject14623<T> = {
  readonly [P in keyof T]: DeepReadonly14623<T[P]>;
};

type UnionToIntersection14623<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14623<T> = UnionToIntersection14623<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14623<T extends unknown[], V> = [...T, V];

type TuplifyUnion14623<T, L = LastOf14623<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14623<TuplifyUnion14623<Exclude<T, L>>, L>;

type DeepPartial14623<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14623<T[P]> }
  : T;

type Paths14623<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14623<K, Paths14623<T[K], Prev14623[D]>> : never }[keyof T]
  : never;

type Prev14623 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14623<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14623 {
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

type ConfigPaths14623 = Paths14623<NestedConfig14623>;

interface HeavyProps14623 {
  config: DeepPartial14623<NestedConfig14623>;
  path?: ConfigPaths14623;
}

const HeavyComponent14623 = memo(function HeavyComponent14623({ config }: HeavyProps14623) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14623) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14623 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14623: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14623.displayName = 'HeavyComponent14623';
export default HeavyComponent14623;
