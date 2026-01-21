'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14668<T> = T extends (infer U)[]
  ? DeepReadonlyArray14668<U>
  : T extends object
  ? DeepReadonlyObject14668<T>
  : T;

interface DeepReadonlyArray14668<T> extends ReadonlyArray<DeepReadonly14668<T>> {}

type DeepReadonlyObject14668<T> = {
  readonly [P in keyof T]: DeepReadonly14668<T[P]>;
};

type UnionToIntersection14668<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14668<T> = UnionToIntersection14668<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14668<T extends unknown[], V> = [...T, V];

type TuplifyUnion14668<T, L = LastOf14668<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14668<TuplifyUnion14668<Exclude<T, L>>, L>;

type DeepPartial14668<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14668<T[P]> }
  : T;

type Paths14668<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14668<K, Paths14668<T[K], Prev14668[D]>> : never }[keyof T]
  : never;

type Prev14668 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14668<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14668 {
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

type ConfigPaths14668 = Paths14668<NestedConfig14668>;

interface HeavyProps14668 {
  config: DeepPartial14668<NestedConfig14668>;
  path?: ConfigPaths14668;
}

const HeavyComponent14668 = memo(function HeavyComponent14668({ config }: HeavyProps14668) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14668) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14668 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14668: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14668.displayName = 'HeavyComponent14668';
export default HeavyComponent14668;
