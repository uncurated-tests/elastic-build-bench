'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14138<T> = T extends (infer U)[]
  ? DeepReadonlyArray14138<U>
  : T extends object
  ? DeepReadonlyObject14138<T>
  : T;

interface DeepReadonlyArray14138<T> extends ReadonlyArray<DeepReadonly14138<T>> {}

type DeepReadonlyObject14138<T> = {
  readonly [P in keyof T]: DeepReadonly14138<T[P]>;
};

type UnionToIntersection14138<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14138<T> = UnionToIntersection14138<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14138<T extends unknown[], V> = [...T, V];

type TuplifyUnion14138<T, L = LastOf14138<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14138<TuplifyUnion14138<Exclude<T, L>>, L>;

type DeepPartial14138<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14138<T[P]> }
  : T;

type Paths14138<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14138<K, Paths14138<T[K], Prev14138[D]>> : never }[keyof T]
  : never;

type Prev14138 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14138<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14138 {
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

type ConfigPaths14138 = Paths14138<NestedConfig14138>;

interface HeavyProps14138 {
  config: DeepPartial14138<NestedConfig14138>;
  path?: ConfigPaths14138;
}

const HeavyComponent14138 = memo(function HeavyComponent14138({ config }: HeavyProps14138) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14138) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14138 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14138: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14138.displayName = 'HeavyComponent14138';
export default HeavyComponent14138;
