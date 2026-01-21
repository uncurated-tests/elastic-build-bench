'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14920<T> = T extends (infer U)[]
  ? DeepReadonlyArray14920<U>
  : T extends object
  ? DeepReadonlyObject14920<T>
  : T;

interface DeepReadonlyArray14920<T> extends ReadonlyArray<DeepReadonly14920<T>> {}

type DeepReadonlyObject14920<T> = {
  readonly [P in keyof T]: DeepReadonly14920<T[P]>;
};

type UnionToIntersection14920<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14920<T> = UnionToIntersection14920<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14920<T extends unknown[], V> = [...T, V];

type TuplifyUnion14920<T, L = LastOf14920<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14920<TuplifyUnion14920<Exclude<T, L>>, L>;

type DeepPartial14920<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14920<T[P]> }
  : T;

type Paths14920<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14920<K, Paths14920<T[K], Prev14920[D]>> : never }[keyof T]
  : never;

type Prev14920 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14920<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14920 {
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

type ConfigPaths14920 = Paths14920<NestedConfig14920>;

interface HeavyProps14920 {
  config: DeepPartial14920<NestedConfig14920>;
  path?: ConfigPaths14920;
}

const HeavyComponent14920 = memo(function HeavyComponent14920({ config }: HeavyProps14920) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14920) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14920 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14920: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14920.displayName = 'HeavyComponent14920';
export default HeavyComponent14920;
