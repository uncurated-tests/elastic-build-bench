'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14935<T> = T extends (infer U)[]
  ? DeepReadonlyArray14935<U>
  : T extends object
  ? DeepReadonlyObject14935<T>
  : T;

interface DeepReadonlyArray14935<T> extends ReadonlyArray<DeepReadonly14935<T>> {}

type DeepReadonlyObject14935<T> = {
  readonly [P in keyof T]: DeepReadonly14935<T[P]>;
};

type UnionToIntersection14935<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14935<T> = UnionToIntersection14935<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14935<T extends unknown[], V> = [...T, V];

type TuplifyUnion14935<T, L = LastOf14935<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14935<TuplifyUnion14935<Exclude<T, L>>, L>;

type DeepPartial14935<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14935<T[P]> }
  : T;

type Paths14935<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14935<K, Paths14935<T[K], Prev14935[D]>> : never }[keyof T]
  : never;

type Prev14935 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14935<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14935 {
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

type ConfigPaths14935 = Paths14935<NestedConfig14935>;

interface HeavyProps14935 {
  config: DeepPartial14935<NestedConfig14935>;
  path?: ConfigPaths14935;
}

const HeavyComponent14935 = memo(function HeavyComponent14935({ config }: HeavyProps14935) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14935) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14935 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14935: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14935.displayName = 'HeavyComponent14935';
export default HeavyComponent14935;
