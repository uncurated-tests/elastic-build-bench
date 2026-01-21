'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14957<T> = T extends (infer U)[]
  ? DeepReadonlyArray14957<U>
  : T extends object
  ? DeepReadonlyObject14957<T>
  : T;

interface DeepReadonlyArray14957<T> extends ReadonlyArray<DeepReadonly14957<T>> {}

type DeepReadonlyObject14957<T> = {
  readonly [P in keyof T]: DeepReadonly14957<T[P]>;
};

type UnionToIntersection14957<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14957<T> = UnionToIntersection14957<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14957<T extends unknown[], V> = [...T, V];

type TuplifyUnion14957<T, L = LastOf14957<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14957<TuplifyUnion14957<Exclude<T, L>>, L>;

type DeepPartial14957<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14957<T[P]> }
  : T;

type Paths14957<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14957<K, Paths14957<T[K], Prev14957[D]>> : never }[keyof T]
  : never;

type Prev14957 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14957<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14957 {
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

type ConfigPaths14957 = Paths14957<NestedConfig14957>;

interface HeavyProps14957 {
  config: DeepPartial14957<NestedConfig14957>;
  path?: ConfigPaths14957;
}

const HeavyComponent14957 = memo(function HeavyComponent14957({ config }: HeavyProps14957) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14957) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14957 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14957: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14957.displayName = 'HeavyComponent14957';
export default HeavyComponent14957;
