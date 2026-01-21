'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14271<T> = T extends (infer U)[]
  ? DeepReadonlyArray14271<U>
  : T extends object
  ? DeepReadonlyObject14271<T>
  : T;

interface DeepReadonlyArray14271<T> extends ReadonlyArray<DeepReadonly14271<T>> {}

type DeepReadonlyObject14271<T> = {
  readonly [P in keyof T]: DeepReadonly14271<T[P]>;
};

type UnionToIntersection14271<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14271<T> = UnionToIntersection14271<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14271<T extends unknown[], V> = [...T, V];

type TuplifyUnion14271<T, L = LastOf14271<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14271<TuplifyUnion14271<Exclude<T, L>>, L>;

type DeepPartial14271<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14271<T[P]> }
  : T;

type Paths14271<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14271<K, Paths14271<T[K], Prev14271[D]>> : never }[keyof T]
  : never;

type Prev14271 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14271<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14271 {
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

type ConfigPaths14271 = Paths14271<NestedConfig14271>;

interface HeavyProps14271 {
  config: DeepPartial14271<NestedConfig14271>;
  path?: ConfigPaths14271;
}

const HeavyComponent14271 = memo(function HeavyComponent14271({ config }: HeavyProps14271) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14271) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14271 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14271: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14271.displayName = 'HeavyComponent14271';
export default HeavyComponent14271;
