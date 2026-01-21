'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14312<T> = T extends (infer U)[]
  ? DeepReadonlyArray14312<U>
  : T extends object
  ? DeepReadonlyObject14312<T>
  : T;

interface DeepReadonlyArray14312<T> extends ReadonlyArray<DeepReadonly14312<T>> {}

type DeepReadonlyObject14312<T> = {
  readonly [P in keyof T]: DeepReadonly14312<T[P]>;
};

type UnionToIntersection14312<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14312<T> = UnionToIntersection14312<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14312<T extends unknown[], V> = [...T, V];

type TuplifyUnion14312<T, L = LastOf14312<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14312<TuplifyUnion14312<Exclude<T, L>>, L>;

type DeepPartial14312<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14312<T[P]> }
  : T;

type Paths14312<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14312<K, Paths14312<T[K], Prev14312[D]>> : never }[keyof T]
  : never;

type Prev14312 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14312<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14312 {
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

type ConfigPaths14312 = Paths14312<NestedConfig14312>;

interface HeavyProps14312 {
  config: DeepPartial14312<NestedConfig14312>;
  path?: ConfigPaths14312;
}

const HeavyComponent14312 = memo(function HeavyComponent14312({ config }: HeavyProps14312) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14312) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14312 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14312: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14312.displayName = 'HeavyComponent14312';
export default HeavyComponent14312;
