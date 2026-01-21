'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14310<T> = T extends (infer U)[]
  ? DeepReadonlyArray14310<U>
  : T extends object
  ? DeepReadonlyObject14310<T>
  : T;

interface DeepReadonlyArray14310<T> extends ReadonlyArray<DeepReadonly14310<T>> {}

type DeepReadonlyObject14310<T> = {
  readonly [P in keyof T]: DeepReadonly14310<T[P]>;
};

type UnionToIntersection14310<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14310<T> = UnionToIntersection14310<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14310<T extends unknown[], V> = [...T, V];

type TuplifyUnion14310<T, L = LastOf14310<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14310<TuplifyUnion14310<Exclude<T, L>>, L>;

type DeepPartial14310<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14310<T[P]> }
  : T;

type Paths14310<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14310<K, Paths14310<T[K], Prev14310[D]>> : never }[keyof T]
  : never;

type Prev14310 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14310<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14310 {
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

type ConfigPaths14310 = Paths14310<NestedConfig14310>;

interface HeavyProps14310 {
  config: DeepPartial14310<NestedConfig14310>;
  path?: ConfigPaths14310;
}

const HeavyComponent14310 = memo(function HeavyComponent14310({ config }: HeavyProps14310) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14310) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14310 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14310: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14310.displayName = 'HeavyComponent14310';
export default HeavyComponent14310;
