'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14904<T> = T extends (infer U)[]
  ? DeepReadonlyArray14904<U>
  : T extends object
  ? DeepReadonlyObject14904<T>
  : T;

interface DeepReadonlyArray14904<T> extends ReadonlyArray<DeepReadonly14904<T>> {}

type DeepReadonlyObject14904<T> = {
  readonly [P in keyof T]: DeepReadonly14904<T[P]>;
};

type UnionToIntersection14904<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14904<T> = UnionToIntersection14904<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14904<T extends unknown[], V> = [...T, V];

type TuplifyUnion14904<T, L = LastOf14904<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14904<TuplifyUnion14904<Exclude<T, L>>, L>;

type DeepPartial14904<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14904<T[P]> }
  : T;

type Paths14904<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14904<K, Paths14904<T[K], Prev14904[D]>> : never }[keyof T]
  : never;

type Prev14904 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14904<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14904 {
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

type ConfigPaths14904 = Paths14904<NestedConfig14904>;

interface HeavyProps14904 {
  config: DeepPartial14904<NestedConfig14904>;
  path?: ConfigPaths14904;
}

const HeavyComponent14904 = memo(function HeavyComponent14904({ config }: HeavyProps14904) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14904) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14904 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14904: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14904.displayName = 'HeavyComponent14904';
export default HeavyComponent14904;
