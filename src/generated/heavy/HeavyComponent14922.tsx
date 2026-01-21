'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14922<T> = T extends (infer U)[]
  ? DeepReadonlyArray14922<U>
  : T extends object
  ? DeepReadonlyObject14922<T>
  : T;

interface DeepReadonlyArray14922<T> extends ReadonlyArray<DeepReadonly14922<T>> {}

type DeepReadonlyObject14922<T> = {
  readonly [P in keyof T]: DeepReadonly14922<T[P]>;
};

type UnionToIntersection14922<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14922<T> = UnionToIntersection14922<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14922<T extends unknown[], V> = [...T, V];

type TuplifyUnion14922<T, L = LastOf14922<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14922<TuplifyUnion14922<Exclude<T, L>>, L>;

type DeepPartial14922<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14922<T[P]> }
  : T;

type Paths14922<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14922<K, Paths14922<T[K], Prev14922[D]>> : never }[keyof T]
  : never;

type Prev14922 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14922<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14922 {
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

type ConfigPaths14922 = Paths14922<NestedConfig14922>;

interface HeavyProps14922 {
  config: DeepPartial14922<NestedConfig14922>;
  path?: ConfigPaths14922;
}

const HeavyComponent14922 = memo(function HeavyComponent14922({ config }: HeavyProps14922) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14922) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14922 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14922: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14922.displayName = 'HeavyComponent14922';
export default HeavyComponent14922;
