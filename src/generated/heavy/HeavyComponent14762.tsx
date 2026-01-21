'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14762<T> = T extends (infer U)[]
  ? DeepReadonlyArray14762<U>
  : T extends object
  ? DeepReadonlyObject14762<T>
  : T;

interface DeepReadonlyArray14762<T> extends ReadonlyArray<DeepReadonly14762<T>> {}

type DeepReadonlyObject14762<T> = {
  readonly [P in keyof T]: DeepReadonly14762<T[P]>;
};

type UnionToIntersection14762<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14762<T> = UnionToIntersection14762<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14762<T extends unknown[], V> = [...T, V];

type TuplifyUnion14762<T, L = LastOf14762<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14762<TuplifyUnion14762<Exclude<T, L>>, L>;

type DeepPartial14762<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14762<T[P]> }
  : T;

type Paths14762<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14762<K, Paths14762<T[K], Prev14762[D]>> : never }[keyof T]
  : never;

type Prev14762 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14762<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14762 {
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

type ConfigPaths14762 = Paths14762<NestedConfig14762>;

interface HeavyProps14762 {
  config: DeepPartial14762<NestedConfig14762>;
  path?: ConfigPaths14762;
}

const HeavyComponent14762 = memo(function HeavyComponent14762({ config }: HeavyProps14762) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14762) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14762 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14762: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14762.displayName = 'HeavyComponent14762';
export default HeavyComponent14762;
