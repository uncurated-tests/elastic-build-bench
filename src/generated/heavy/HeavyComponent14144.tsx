'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14144<T> = T extends (infer U)[]
  ? DeepReadonlyArray14144<U>
  : T extends object
  ? DeepReadonlyObject14144<T>
  : T;

interface DeepReadonlyArray14144<T> extends ReadonlyArray<DeepReadonly14144<T>> {}

type DeepReadonlyObject14144<T> = {
  readonly [P in keyof T]: DeepReadonly14144<T[P]>;
};

type UnionToIntersection14144<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14144<T> = UnionToIntersection14144<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14144<T extends unknown[], V> = [...T, V];

type TuplifyUnion14144<T, L = LastOf14144<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14144<TuplifyUnion14144<Exclude<T, L>>, L>;

type DeepPartial14144<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14144<T[P]> }
  : T;

type Paths14144<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14144<K, Paths14144<T[K], Prev14144[D]>> : never }[keyof T]
  : never;

type Prev14144 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14144<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14144 {
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

type ConfigPaths14144 = Paths14144<NestedConfig14144>;

interface HeavyProps14144 {
  config: DeepPartial14144<NestedConfig14144>;
  path?: ConfigPaths14144;
}

const HeavyComponent14144 = memo(function HeavyComponent14144({ config }: HeavyProps14144) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14144) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14144 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14144: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14144.displayName = 'HeavyComponent14144';
export default HeavyComponent14144;
