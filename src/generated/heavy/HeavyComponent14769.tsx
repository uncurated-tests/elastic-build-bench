'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14769<T> = T extends (infer U)[]
  ? DeepReadonlyArray14769<U>
  : T extends object
  ? DeepReadonlyObject14769<T>
  : T;

interface DeepReadonlyArray14769<T> extends ReadonlyArray<DeepReadonly14769<T>> {}

type DeepReadonlyObject14769<T> = {
  readonly [P in keyof T]: DeepReadonly14769<T[P]>;
};

type UnionToIntersection14769<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14769<T> = UnionToIntersection14769<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14769<T extends unknown[], V> = [...T, V];

type TuplifyUnion14769<T, L = LastOf14769<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14769<TuplifyUnion14769<Exclude<T, L>>, L>;

type DeepPartial14769<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14769<T[P]> }
  : T;

type Paths14769<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14769<K, Paths14769<T[K], Prev14769[D]>> : never }[keyof T]
  : never;

type Prev14769 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14769<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14769 {
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

type ConfigPaths14769 = Paths14769<NestedConfig14769>;

interface HeavyProps14769 {
  config: DeepPartial14769<NestedConfig14769>;
  path?: ConfigPaths14769;
}

const HeavyComponent14769 = memo(function HeavyComponent14769({ config }: HeavyProps14769) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14769) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14769 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14769: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14769.displayName = 'HeavyComponent14769';
export default HeavyComponent14769;
