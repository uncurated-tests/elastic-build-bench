'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14651<T> = T extends (infer U)[]
  ? DeepReadonlyArray14651<U>
  : T extends object
  ? DeepReadonlyObject14651<T>
  : T;

interface DeepReadonlyArray14651<T> extends ReadonlyArray<DeepReadonly14651<T>> {}

type DeepReadonlyObject14651<T> = {
  readonly [P in keyof T]: DeepReadonly14651<T[P]>;
};

type UnionToIntersection14651<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14651<T> = UnionToIntersection14651<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14651<T extends unknown[], V> = [...T, V];

type TuplifyUnion14651<T, L = LastOf14651<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14651<TuplifyUnion14651<Exclude<T, L>>, L>;

type DeepPartial14651<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14651<T[P]> }
  : T;

type Paths14651<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14651<K, Paths14651<T[K], Prev14651[D]>> : never }[keyof T]
  : never;

type Prev14651 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14651<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14651 {
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

type ConfigPaths14651 = Paths14651<NestedConfig14651>;

interface HeavyProps14651 {
  config: DeepPartial14651<NestedConfig14651>;
  path?: ConfigPaths14651;
}

const HeavyComponent14651 = memo(function HeavyComponent14651({ config }: HeavyProps14651) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14651) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14651 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14651: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14651.displayName = 'HeavyComponent14651';
export default HeavyComponent14651;
