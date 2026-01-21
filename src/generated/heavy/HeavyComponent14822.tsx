'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14822<T> = T extends (infer U)[]
  ? DeepReadonlyArray14822<U>
  : T extends object
  ? DeepReadonlyObject14822<T>
  : T;

interface DeepReadonlyArray14822<T> extends ReadonlyArray<DeepReadonly14822<T>> {}

type DeepReadonlyObject14822<T> = {
  readonly [P in keyof T]: DeepReadonly14822<T[P]>;
};

type UnionToIntersection14822<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14822<T> = UnionToIntersection14822<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14822<T extends unknown[], V> = [...T, V];

type TuplifyUnion14822<T, L = LastOf14822<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14822<TuplifyUnion14822<Exclude<T, L>>, L>;

type DeepPartial14822<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14822<T[P]> }
  : T;

type Paths14822<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14822<K, Paths14822<T[K], Prev14822[D]>> : never }[keyof T]
  : never;

type Prev14822 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14822<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14822 {
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

type ConfigPaths14822 = Paths14822<NestedConfig14822>;

interface HeavyProps14822 {
  config: DeepPartial14822<NestedConfig14822>;
  path?: ConfigPaths14822;
}

const HeavyComponent14822 = memo(function HeavyComponent14822({ config }: HeavyProps14822) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14822) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14822 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14822: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14822.displayName = 'HeavyComponent14822';
export default HeavyComponent14822;
