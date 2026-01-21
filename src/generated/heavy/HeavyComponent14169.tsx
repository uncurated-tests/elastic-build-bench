'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14169<T> = T extends (infer U)[]
  ? DeepReadonlyArray14169<U>
  : T extends object
  ? DeepReadonlyObject14169<T>
  : T;

interface DeepReadonlyArray14169<T> extends ReadonlyArray<DeepReadonly14169<T>> {}

type DeepReadonlyObject14169<T> = {
  readonly [P in keyof T]: DeepReadonly14169<T[P]>;
};

type UnionToIntersection14169<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14169<T> = UnionToIntersection14169<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14169<T extends unknown[], V> = [...T, V];

type TuplifyUnion14169<T, L = LastOf14169<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14169<TuplifyUnion14169<Exclude<T, L>>, L>;

type DeepPartial14169<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14169<T[P]> }
  : T;

type Paths14169<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14169<K, Paths14169<T[K], Prev14169[D]>> : never }[keyof T]
  : never;

type Prev14169 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14169<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14169 {
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

type ConfigPaths14169 = Paths14169<NestedConfig14169>;

interface HeavyProps14169 {
  config: DeepPartial14169<NestedConfig14169>;
  path?: ConfigPaths14169;
}

const HeavyComponent14169 = memo(function HeavyComponent14169({ config }: HeavyProps14169) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14169) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14169 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14169: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14169.displayName = 'HeavyComponent14169';
export default HeavyComponent14169;
