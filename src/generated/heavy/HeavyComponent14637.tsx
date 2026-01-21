'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14637<T> = T extends (infer U)[]
  ? DeepReadonlyArray14637<U>
  : T extends object
  ? DeepReadonlyObject14637<T>
  : T;

interface DeepReadonlyArray14637<T> extends ReadonlyArray<DeepReadonly14637<T>> {}

type DeepReadonlyObject14637<T> = {
  readonly [P in keyof T]: DeepReadonly14637<T[P]>;
};

type UnionToIntersection14637<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14637<T> = UnionToIntersection14637<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14637<T extends unknown[], V> = [...T, V];

type TuplifyUnion14637<T, L = LastOf14637<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14637<TuplifyUnion14637<Exclude<T, L>>, L>;

type DeepPartial14637<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14637<T[P]> }
  : T;

type Paths14637<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14637<K, Paths14637<T[K], Prev14637[D]>> : never }[keyof T]
  : never;

type Prev14637 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14637<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14637 {
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

type ConfigPaths14637 = Paths14637<NestedConfig14637>;

interface HeavyProps14637 {
  config: DeepPartial14637<NestedConfig14637>;
  path?: ConfigPaths14637;
}

const HeavyComponent14637 = memo(function HeavyComponent14637({ config }: HeavyProps14637) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14637) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14637 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14637: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14637.displayName = 'HeavyComponent14637';
export default HeavyComponent14637;
