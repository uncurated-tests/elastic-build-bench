'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14990<T> = T extends (infer U)[]
  ? DeepReadonlyArray14990<U>
  : T extends object
  ? DeepReadonlyObject14990<T>
  : T;

interface DeepReadonlyArray14990<T> extends ReadonlyArray<DeepReadonly14990<T>> {}

type DeepReadonlyObject14990<T> = {
  readonly [P in keyof T]: DeepReadonly14990<T[P]>;
};

type UnionToIntersection14990<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14990<T> = UnionToIntersection14990<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14990<T extends unknown[], V> = [...T, V];

type TuplifyUnion14990<T, L = LastOf14990<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14990<TuplifyUnion14990<Exclude<T, L>>, L>;

type DeepPartial14990<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14990<T[P]> }
  : T;

type Paths14990<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14990<K, Paths14990<T[K], Prev14990[D]>> : never }[keyof T]
  : never;

type Prev14990 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14990<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14990 {
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

type ConfigPaths14990 = Paths14990<NestedConfig14990>;

interface HeavyProps14990 {
  config: DeepPartial14990<NestedConfig14990>;
  path?: ConfigPaths14990;
}

const HeavyComponent14990 = memo(function HeavyComponent14990({ config }: HeavyProps14990) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14990) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14990 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14990: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14990.displayName = 'HeavyComponent14990';
export default HeavyComponent14990;
