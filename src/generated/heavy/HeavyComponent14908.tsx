'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14908<T> = T extends (infer U)[]
  ? DeepReadonlyArray14908<U>
  : T extends object
  ? DeepReadonlyObject14908<T>
  : T;

interface DeepReadonlyArray14908<T> extends ReadonlyArray<DeepReadonly14908<T>> {}

type DeepReadonlyObject14908<T> = {
  readonly [P in keyof T]: DeepReadonly14908<T[P]>;
};

type UnionToIntersection14908<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14908<T> = UnionToIntersection14908<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14908<T extends unknown[], V> = [...T, V];

type TuplifyUnion14908<T, L = LastOf14908<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14908<TuplifyUnion14908<Exclude<T, L>>, L>;

type DeepPartial14908<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14908<T[P]> }
  : T;

type Paths14908<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14908<K, Paths14908<T[K], Prev14908[D]>> : never }[keyof T]
  : never;

type Prev14908 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14908<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14908 {
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

type ConfigPaths14908 = Paths14908<NestedConfig14908>;

interface HeavyProps14908 {
  config: DeepPartial14908<NestedConfig14908>;
  path?: ConfigPaths14908;
}

const HeavyComponent14908 = memo(function HeavyComponent14908({ config }: HeavyProps14908) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14908) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14908 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14908: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14908.displayName = 'HeavyComponent14908';
export default HeavyComponent14908;
