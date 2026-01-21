'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14772<T> = T extends (infer U)[]
  ? DeepReadonlyArray14772<U>
  : T extends object
  ? DeepReadonlyObject14772<T>
  : T;

interface DeepReadonlyArray14772<T> extends ReadonlyArray<DeepReadonly14772<T>> {}

type DeepReadonlyObject14772<T> = {
  readonly [P in keyof T]: DeepReadonly14772<T[P]>;
};

type UnionToIntersection14772<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14772<T> = UnionToIntersection14772<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14772<T extends unknown[], V> = [...T, V];

type TuplifyUnion14772<T, L = LastOf14772<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14772<TuplifyUnion14772<Exclude<T, L>>, L>;

type DeepPartial14772<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14772<T[P]> }
  : T;

type Paths14772<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14772<K, Paths14772<T[K], Prev14772[D]>> : never }[keyof T]
  : never;

type Prev14772 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14772<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14772 {
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

type ConfigPaths14772 = Paths14772<NestedConfig14772>;

interface HeavyProps14772 {
  config: DeepPartial14772<NestedConfig14772>;
  path?: ConfigPaths14772;
}

const HeavyComponent14772 = memo(function HeavyComponent14772({ config }: HeavyProps14772) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14772) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14772 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14772: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14772.displayName = 'HeavyComponent14772';
export default HeavyComponent14772;
