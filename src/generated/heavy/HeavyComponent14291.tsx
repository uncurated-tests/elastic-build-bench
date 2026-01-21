'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14291<T> = T extends (infer U)[]
  ? DeepReadonlyArray14291<U>
  : T extends object
  ? DeepReadonlyObject14291<T>
  : T;

interface DeepReadonlyArray14291<T> extends ReadonlyArray<DeepReadonly14291<T>> {}

type DeepReadonlyObject14291<T> = {
  readonly [P in keyof T]: DeepReadonly14291<T[P]>;
};

type UnionToIntersection14291<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14291<T> = UnionToIntersection14291<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14291<T extends unknown[], V> = [...T, V];

type TuplifyUnion14291<T, L = LastOf14291<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14291<TuplifyUnion14291<Exclude<T, L>>, L>;

type DeepPartial14291<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14291<T[P]> }
  : T;

type Paths14291<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14291<K, Paths14291<T[K], Prev14291[D]>> : never }[keyof T]
  : never;

type Prev14291 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14291<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14291 {
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

type ConfigPaths14291 = Paths14291<NestedConfig14291>;

interface HeavyProps14291 {
  config: DeepPartial14291<NestedConfig14291>;
  path?: ConfigPaths14291;
}

const HeavyComponent14291 = memo(function HeavyComponent14291({ config }: HeavyProps14291) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14291) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14291 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14291: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14291.displayName = 'HeavyComponent14291';
export default HeavyComponent14291;
