'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14186<T> = T extends (infer U)[]
  ? DeepReadonlyArray14186<U>
  : T extends object
  ? DeepReadonlyObject14186<T>
  : T;

interface DeepReadonlyArray14186<T> extends ReadonlyArray<DeepReadonly14186<T>> {}

type DeepReadonlyObject14186<T> = {
  readonly [P in keyof T]: DeepReadonly14186<T[P]>;
};

type UnionToIntersection14186<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14186<T> = UnionToIntersection14186<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14186<T extends unknown[], V> = [...T, V];

type TuplifyUnion14186<T, L = LastOf14186<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14186<TuplifyUnion14186<Exclude<T, L>>, L>;

type DeepPartial14186<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14186<T[P]> }
  : T;

type Paths14186<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14186<K, Paths14186<T[K], Prev14186[D]>> : never }[keyof T]
  : never;

type Prev14186 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14186<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14186 {
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

type ConfigPaths14186 = Paths14186<NestedConfig14186>;

interface HeavyProps14186 {
  config: DeepPartial14186<NestedConfig14186>;
  path?: ConfigPaths14186;
}

const HeavyComponent14186 = memo(function HeavyComponent14186({ config }: HeavyProps14186) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14186) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14186 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14186: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14186.displayName = 'HeavyComponent14186';
export default HeavyComponent14186;
