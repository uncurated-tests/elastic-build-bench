'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14214<T> = T extends (infer U)[]
  ? DeepReadonlyArray14214<U>
  : T extends object
  ? DeepReadonlyObject14214<T>
  : T;

interface DeepReadonlyArray14214<T> extends ReadonlyArray<DeepReadonly14214<T>> {}

type DeepReadonlyObject14214<T> = {
  readonly [P in keyof T]: DeepReadonly14214<T[P]>;
};

type UnionToIntersection14214<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14214<T> = UnionToIntersection14214<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14214<T extends unknown[], V> = [...T, V];

type TuplifyUnion14214<T, L = LastOf14214<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14214<TuplifyUnion14214<Exclude<T, L>>, L>;

type DeepPartial14214<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14214<T[P]> }
  : T;

type Paths14214<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14214<K, Paths14214<T[K], Prev14214[D]>> : never }[keyof T]
  : never;

type Prev14214 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14214<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14214 {
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

type ConfigPaths14214 = Paths14214<NestedConfig14214>;

interface HeavyProps14214 {
  config: DeepPartial14214<NestedConfig14214>;
  path?: ConfigPaths14214;
}

const HeavyComponent14214 = memo(function HeavyComponent14214({ config }: HeavyProps14214) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14214) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14214 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14214: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14214.displayName = 'HeavyComponent14214';
export default HeavyComponent14214;
