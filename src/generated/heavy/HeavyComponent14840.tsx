'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14840<T> = T extends (infer U)[]
  ? DeepReadonlyArray14840<U>
  : T extends object
  ? DeepReadonlyObject14840<T>
  : T;

interface DeepReadonlyArray14840<T> extends ReadonlyArray<DeepReadonly14840<T>> {}

type DeepReadonlyObject14840<T> = {
  readonly [P in keyof T]: DeepReadonly14840<T[P]>;
};

type UnionToIntersection14840<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14840<T> = UnionToIntersection14840<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14840<T extends unknown[], V> = [...T, V];

type TuplifyUnion14840<T, L = LastOf14840<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14840<TuplifyUnion14840<Exclude<T, L>>, L>;

type DeepPartial14840<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14840<T[P]> }
  : T;

type Paths14840<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14840<K, Paths14840<T[K], Prev14840[D]>> : never }[keyof T]
  : never;

type Prev14840 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14840<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14840 {
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

type ConfigPaths14840 = Paths14840<NestedConfig14840>;

interface HeavyProps14840 {
  config: DeepPartial14840<NestedConfig14840>;
  path?: ConfigPaths14840;
}

const HeavyComponent14840 = memo(function HeavyComponent14840({ config }: HeavyProps14840) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14840) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14840 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14840: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14840.displayName = 'HeavyComponent14840';
export default HeavyComponent14840;
