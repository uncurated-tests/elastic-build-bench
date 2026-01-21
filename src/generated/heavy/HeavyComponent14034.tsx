'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14034<T> = T extends (infer U)[]
  ? DeepReadonlyArray14034<U>
  : T extends object
  ? DeepReadonlyObject14034<T>
  : T;

interface DeepReadonlyArray14034<T> extends ReadonlyArray<DeepReadonly14034<T>> {}

type DeepReadonlyObject14034<T> = {
  readonly [P in keyof T]: DeepReadonly14034<T[P]>;
};

type UnionToIntersection14034<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14034<T> = UnionToIntersection14034<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14034<T extends unknown[], V> = [...T, V];

type TuplifyUnion14034<T, L = LastOf14034<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14034<TuplifyUnion14034<Exclude<T, L>>, L>;

type DeepPartial14034<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14034<T[P]> }
  : T;

type Paths14034<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14034<K, Paths14034<T[K], Prev14034[D]>> : never }[keyof T]
  : never;

type Prev14034 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14034<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14034 {
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

type ConfigPaths14034 = Paths14034<NestedConfig14034>;

interface HeavyProps14034 {
  config: DeepPartial14034<NestedConfig14034>;
  path?: ConfigPaths14034;
}

const HeavyComponent14034 = memo(function HeavyComponent14034({ config }: HeavyProps14034) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14034) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14034 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14034: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14034.displayName = 'HeavyComponent14034';
export default HeavyComponent14034;
