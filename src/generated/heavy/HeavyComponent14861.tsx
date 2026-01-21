'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14861<T> = T extends (infer U)[]
  ? DeepReadonlyArray14861<U>
  : T extends object
  ? DeepReadonlyObject14861<T>
  : T;

interface DeepReadonlyArray14861<T> extends ReadonlyArray<DeepReadonly14861<T>> {}

type DeepReadonlyObject14861<T> = {
  readonly [P in keyof T]: DeepReadonly14861<T[P]>;
};

type UnionToIntersection14861<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14861<T> = UnionToIntersection14861<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14861<T extends unknown[], V> = [...T, V];

type TuplifyUnion14861<T, L = LastOf14861<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14861<TuplifyUnion14861<Exclude<T, L>>, L>;

type DeepPartial14861<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14861<T[P]> }
  : T;

type Paths14861<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14861<K, Paths14861<T[K], Prev14861[D]>> : never }[keyof T]
  : never;

type Prev14861 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14861<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14861 {
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

type ConfigPaths14861 = Paths14861<NestedConfig14861>;

interface HeavyProps14861 {
  config: DeepPartial14861<NestedConfig14861>;
  path?: ConfigPaths14861;
}

const HeavyComponent14861 = memo(function HeavyComponent14861({ config }: HeavyProps14861) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14861) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14861 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14861: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14861.displayName = 'HeavyComponent14861';
export default HeavyComponent14861;
