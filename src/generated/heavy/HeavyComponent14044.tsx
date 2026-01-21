'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14044<T> = T extends (infer U)[]
  ? DeepReadonlyArray14044<U>
  : T extends object
  ? DeepReadonlyObject14044<T>
  : T;

interface DeepReadonlyArray14044<T> extends ReadonlyArray<DeepReadonly14044<T>> {}

type DeepReadonlyObject14044<T> = {
  readonly [P in keyof T]: DeepReadonly14044<T[P]>;
};

type UnionToIntersection14044<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14044<T> = UnionToIntersection14044<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14044<T extends unknown[], V> = [...T, V];

type TuplifyUnion14044<T, L = LastOf14044<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14044<TuplifyUnion14044<Exclude<T, L>>, L>;

type DeepPartial14044<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14044<T[P]> }
  : T;

type Paths14044<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14044<K, Paths14044<T[K], Prev14044[D]>> : never }[keyof T]
  : never;

type Prev14044 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14044<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14044 {
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

type ConfigPaths14044 = Paths14044<NestedConfig14044>;

interface HeavyProps14044 {
  config: DeepPartial14044<NestedConfig14044>;
  path?: ConfigPaths14044;
}

const HeavyComponent14044 = memo(function HeavyComponent14044({ config }: HeavyProps14044) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14044) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14044 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14044: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14044.displayName = 'HeavyComponent14044';
export default HeavyComponent14044;
