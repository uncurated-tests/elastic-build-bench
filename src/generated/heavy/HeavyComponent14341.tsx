'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14341<T> = T extends (infer U)[]
  ? DeepReadonlyArray14341<U>
  : T extends object
  ? DeepReadonlyObject14341<T>
  : T;

interface DeepReadonlyArray14341<T> extends ReadonlyArray<DeepReadonly14341<T>> {}

type DeepReadonlyObject14341<T> = {
  readonly [P in keyof T]: DeepReadonly14341<T[P]>;
};

type UnionToIntersection14341<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14341<T> = UnionToIntersection14341<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14341<T extends unknown[], V> = [...T, V];

type TuplifyUnion14341<T, L = LastOf14341<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14341<TuplifyUnion14341<Exclude<T, L>>, L>;

type DeepPartial14341<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14341<T[P]> }
  : T;

type Paths14341<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14341<K, Paths14341<T[K], Prev14341[D]>> : never }[keyof T]
  : never;

type Prev14341 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14341<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14341 {
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

type ConfigPaths14341 = Paths14341<NestedConfig14341>;

interface HeavyProps14341 {
  config: DeepPartial14341<NestedConfig14341>;
  path?: ConfigPaths14341;
}

const HeavyComponent14341 = memo(function HeavyComponent14341({ config }: HeavyProps14341) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14341) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14341 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14341: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14341.displayName = 'HeavyComponent14341';
export default HeavyComponent14341;
