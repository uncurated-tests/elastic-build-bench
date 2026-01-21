'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14205<T> = T extends (infer U)[]
  ? DeepReadonlyArray14205<U>
  : T extends object
  ? DeepReadonlyObject14205<T>
  : T;

interface DeepReadonlyArray14205<T> extends ReadonlyArray<DeepReadonly14205<T>> {}

type DeepReadonlyObject14205<T> = {
  readonly [P in keyof T]: DeepReadonly14205<T[P]>;
};

type UnionToIntersection14205<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14205<T> = UnionToIntersection14205<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14205<T extends unknown[], V> = [...T, V];

type TuplifyUnion14205<T, L = LastOf14205<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14205<TuplifyUnion14205<Exclude<T, L>>, L>;

type DeepPartial14205<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14205<T[P]> }
  : T;

type Paths14205<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14205<K, Paths14205<T[K], Prev14205[D]>> : never }[keyof T]
  : never;

type Prev14205 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14205<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14205 {
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

type ConfigPaths14205 = Paths14205<NestedConfig14205>;

interface HeavyProps14205 {
  config: DeepPartial14205<NestedConfig14205>;
  path?: ConfigPaths14205;
}

const HeavyComponent14205 = memo(function HeavyComponent14205({ config }: HeavyProps14205) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14205) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14205 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14205: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14205.displayName = 'HeavyComponent14205';
export default HeavyComponent14205;
