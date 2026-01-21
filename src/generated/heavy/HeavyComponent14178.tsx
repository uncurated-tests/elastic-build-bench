'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14178<T> = T extends (infer U)[]
  ? DeepReadonlyArray14178<U>
  : T extends object
  ? DeepReadonlyObject14178<T>
  : T;

interface DeepReadonlyArray14178<T> extends ReadonlyArray<DeepReadonly14178<T>> {}

type DeepReadonlyObject14178<T> = {
  readonly [P in keyof T]: DeepReadonly14178<T[P]>;
};

type UnionToIntersection14178<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14178<T> = UnionToIntersection14178<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14178<T extends unknown[], V> = [...T, V];

type TuplifyUnion14178<T, L = LastOf14178<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14178<TuplifyUnion14178<Exclude<T, L>>, L>;

type DeepPartial14178<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14178<T[P]> }
  : T;

type Paths14178<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14178<K, Paths14178<T[K], Prev14178[D]>> : never }[keyof T]
  : never;

type Prev14178 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14178<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14178 {
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

type ConfigPaths14178 = Paths14178<NestedConfig14178>;

interface HeavyProps14178 {
  config: DeepPartial14178<NestedConfig14178>;
  path?: ConfigPaths14178;
}

const HeavyComponent14178 = memo(function HeavyComponent14178({ config }: HeavyProps14178) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14178) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14178 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14178: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14178.displayName = 'HeavyComponent14178';
export default HeavyComponent14178;
