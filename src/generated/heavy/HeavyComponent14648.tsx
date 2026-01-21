'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14648<T> = T extends (infer U)[]
  ? DeepReadonlyArray14648<U>
  : T extends object
  ? DeepReadonlyObject14648<T>
  : T;

interface DeepReadonlyArray14648<T> extends ReadonlyArray<DeepReadonly14648<T>> {}

type DeepReadonlyObject14648<T> = {
  readonly [P in keyof T]: DeepReadonly14648<T[P]>;
};

type UnionToIntersection14648<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14648<T> = UnionToIntersection14648<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14648<T extends unknown[], V> = [...T, V];

type TuplifyUnion14648<T, L = LastOf14648<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14648<TuplifyUnion14648<Exclude<T, L>>, L>;

type DeepPartial14648<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14648<T[P]> }
  : T;

type Paths14648<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14648<K, Paths14648<T[K], Prev14648[D]>> : never }[keyof T]
  : never;

type Prev14648 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14648<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14648 {
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

type ConfigPaths14648 = Paths14648<NestedConfig14648>;

interface HeavyProps14648 {
  config: DeepPartial14648<NestedConfig14648>;
  path?: ConfigPaths14648;
}

const HeavyComponent14648 = memo(function HeavyComponent14648({ config }: HeavyProps14648) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14648) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14648 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14648: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14648.displayName = 'HeavyComponent14648';
export default HeavyComponent14648;
