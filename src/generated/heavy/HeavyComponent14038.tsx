'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14038<T> = T extends (infer U)[]
  ? DeepReadonlyArray14038<U>
  : T extends object
  ? DeepReadonlyObject14038<T>
  : T;

interface DeepReadonlyArray14038<T> extends ReadonlyArray<DeepReadonly14038<T>> {}

type DeepReadonlyObject14038<T> = {
  readonly [P in keyof T]: DeepReadonly14038<T[P]>;
};

type UnionToIntersection14038<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14038<T> = UnionToIntersection14038<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14038<T extends unknown[], V> = [...T, V];

type TuplifyUnion14038<T, L = LastOf14038<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14038<TuplifyUnion14038<Exclude<T, L>>, L>;

type DeepPartial14038<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14038<T[P]> }
  : T;

type Paths14038<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14038<K, Paths14038<T[K], Prev14038[D]>> : never }[keyof T]
  : never;

type Prev14038 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14038<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14038 {
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

type ConfigPaths14038 = Paths14038<NestedConfig14038>;

interface HeavyProps14038 {
  config: DeepPartial14038<NestedConfig14038>;
  path?: ConfigPaths14038;
}

const HeavyComponent14038 = memo(function HeavyComponent14038({ config }: HeavyProps14038) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14038) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14038 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14038: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14038.displayName = 'HeavyComponent14038';
export default HeavyComponent14038;
