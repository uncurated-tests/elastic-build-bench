'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14538<T> = T extends (infer U)[]
  ? DeepReadonlyArray14538<U>
  : T extends object
  ? DeepReadonlyObject14538<T>
  : T;

interface DeepReadonlyArray14538<T> extends ReadonlyArray<DeepReadonly14538<T>> {}

type DeepReadonlyObject14538<T> = {
  readonly [P in keyof T]: DeepReadonly14538<T[P]>;
};

type UnionToIntersection14538<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14538<T> = UnionToIntersection14538<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14538<T extends unknown[], V> = [...T, V];

type TuplifyUnion14538<T, L = LastOf14538<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14538<TuplifyUnion14538<Exclude<T, L>>, L>;

type DeepPartial14538<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14538<T[P]> }
  : T;

type Paths14538<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14538<K, Paths14538<T[K], Prev14538[D]>> : never }[keyof T]
  : never;

type Prev14538 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14538<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14538 {
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

type ConfigPaths14538 = Paths14538<NestedConfig14538>;

interface HeavyProps14538 {
  config: DeepPartial14538<NestedConfig14538>;
  path?: ConfigPaths14538;
}

const HeavyComponent14538 = memo(function HeavyComponent14538({ config }: HeavyProps14538) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14538) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14538 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14538: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14538.displayName = 'HeavyComponent14538';
export default HeavyComponent14538;
