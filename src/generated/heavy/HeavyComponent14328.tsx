'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14328<T> = T extends (infer U)[]
  ? DeepReadonlyArray14328<U>
  : T extends object
  ? DeepReadonlyObject14328<T>
  : T;

interface DeepReadonlyArray14328<T> extends ReadonlyArray<DeepReadonly14328<T>> {}

type DeepReadonlyObject14328<T> = {
  readonly [P in keyof T]: DeepReadonly14328<T[P]>;
};

type UnionToIntersection14328<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14328<T> = UnionToIntersection14328<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14328<T extends unknown[], V> = [...T, V];

type TuplifyUnion14328<T, L = LastOf14328<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14328<TuplifyUnion14328<Exclude<T, L>>, L>;

type DeepPartial14328<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14328<T[P]> }
  : T;

type Paths14328<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14328<K, Paths14328<T[K], Prev14328[D]>> : never }[keyof T]
  : never;

type Prev14328 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14328<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14328 {
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

type ConfigPaths14328 = Paths14328<NestedConfig14328>;

interface HeavyProps14328 {
  config: DeepPartial14328<NestedConfig14328>;
  path?: ConfigPaths14328;
}

const HeavyComponent14328 = memo(function HeavyComponent14328({ config }: HeavyProps14328) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14328) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14328 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14328: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14328.displayName = 'HeavyComponent14328';
export default HeavyComponent14328;
