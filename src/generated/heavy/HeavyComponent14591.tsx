'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14591<T> = T extends (infer U)[]
  ? DeepReadonlyArray14591<U>
  : T extends object
  ? DeepReadonlyObject14591<T>
  : T;

interface DeepReadonlyArray14591<T> extends ReadonlyArray<DeepReadonly14591<T>> {}

type DeepReadonlyObject14591<T> = {
  readonly [P in keyof T]: DeepReadonly14591<T[P]>;
};

type UnionToIntersection14591<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14591<T> = UnionToIntersection14591<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14591<T extends unknown[], V> = [...T, V];

type TuplifyUnion14591<T, L = LastOf14591<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14591<TuplifyUnion14591<Exclude<T, L>>, L>;

type DeepPartial14591<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14591<T[P]> }
  : T;

type Paths14591<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14591<K, Paths14591<T[K], Prev14591[D]>> : never }[keyof T]
  : never;

type Prev14591 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14591<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14591 {
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

type ConfigPaths14591 = Paths14591<NestedConfig14591>;

interface HeavyProps14591 {
  config: DeepPartial14591<NestedConfig14591>;
  path?: ConfigPaths14591;
}

const HeavyComponent14591 = memo(function HeavyComponent14591({ config }: HeavyProps14591) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14591) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14591 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14591: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14591.displayName = 'HeavyComponent14591';
export default HeavyComponent14591;
