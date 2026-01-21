'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14012<T> = T extends (infer U)[]
  ? DeepReadonlyArray14012<U>
  : T extends object
  ? DeepReadonlyObject14012<T>
  : T;

interface DeepReadonlyArray14012<T> extends ReadonlyArray<DeepReadonly14012<T>> {}

type DeepReadonlyObject14012<T> = {
  readonly [P in keyof T]: DeepReadonly14012<T[P]>;
};

type UnionToIntersection14012<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14012<T> = UnionToIntersection14012<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14012<T extends unknown[], V> = [...T, V];

type TuplifyUnion14012<T, L = LastOf14012<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14012<TuplifyUnion14012<Exclude<T, L>>, L>;

type DeepPartial14012<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14012<T[P]> }
  : T;

type Paths14012<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14012<K, Paths14012<T[K], Prev14012[D]>> : never }[keyof T]
  : never;

type Prev14012 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14012<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14012 {
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

type ConfigPaths14012 = Paths14012<NestedConfig14012>;

interface HeavyProps14012 {
  config: DeepPartial14012<NestedConfig14012>;
  path?: ConfigPaths14012;
}

const HeavyComponent14012 = memo(function HeavyComponent14012({ config }: HeavyProps14012) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14012) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14012 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14012: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14012.displayName = 'HeavyComponent14012';
export default HeavyComponent14012;
