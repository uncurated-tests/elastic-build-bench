'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14952<T> = T extends (infer U)[]
  ? DeepReadonlyArray14952<U>
  : T extends object
  ? DeepReadonlyObject14952<T>
  : T;

interface DeepReadonlyArray14952<T> extends ReadonlyArray<DeepReadonly14952<T>> {}

type DeepReadonlyObject14952<T> = {
  readonly [P in keyof T]: DeepReadonly14952<T[P]>;
};

type UnionToIntersection14952<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14952<T> = UnionToIntersection14952<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14952<T extends unknown[], V> = [...T, V];

type TuplifyUnion14952<T, L = LastOf14952<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14952<TuplifyUnion14952<Exclude<T, L>>, L>;

type DeepPartial14952<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14952<T[P]> }
  : T;

type Paths14952<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14952<K, Paths14952<T[K], Prev14952[D]>> : never }[keyof T]
  : never;

type Prev14952 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14952<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14952 {
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

type ConfigPaths14952 = Paths14952<NestedConfig14952>;

interface HeavyProps14952 {
  config: DeepPartial14952<NestedConfig14952>;
  path?: ConfigPaths14952;
}

const HeavyComponent14952 = memo(function HeavyComponent14952({ config }: HeavyProps14952) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14952) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14952 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14952: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14952.displayName = 'HeavyComponent14952';
export default HeavyComponent14952;
