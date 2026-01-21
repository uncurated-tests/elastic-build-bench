'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14128<T> = T extends (infer U)[]
  ? DeepReadonlyArray14128<U>
  : T extends object
  ? DeepReadonlyObject14128<T>
  : T;

interface DeepReadonlyArray14128<T> extends ReadonlyArray<DeepReadonly14128<T>> {}

type DeepReadonlyObject14128<T> = {
  readonly [P in keyof T]: DeepReadonly14128<T[P]>;
};

type UnionToIntersection14128<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14128<T> = UnionToIntersection14128<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14128<T extends unknown[], V> = [...T, V];

type TuplifyUnion14128<T, L = LastOf14128<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14128<TuplifyUnion14128<Exclude<T, L>>, L>;

type DeepPartial14128<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14128<T[P]> }
  : T;

type Paths14128<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14128<K, Paths14128<T[K], Prev14128[D]>> : never }[keyof T]
  : never;

type Prev14128 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14128<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14128 {
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

type ConfigPaths14128 = Paths14128<NestedConfig14128>;

interface HeavyProps14128 {
  config: DeepPartial14128<NestedConfig14128>;
  path?: ConfigPaths14128;
}

const HeavyComponent14128 = memo(function HeavyComponent14128({ config }: HeavyProps14128) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14128) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14128 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14128: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14128.displayName = 'HeavyComponent14128';
export default HeavyComponent14128;
