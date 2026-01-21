'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14344<T> = T extends (infer U)[]
  ? DeepReadonlyArray14344<U>
  : T extends object
  ? DeepReadonlyObject14344<T>
  : T;

interface DeepReadonlyArray14344<T> extends ReadonlyArray<DeepReadonly14344<T>> {}

type DeepReadonlyObject14344<T> = {
  readonly [P in keyof T]: DeepReadonly14344<T[P]>;
};

type UnionToIntersection14344<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14344<T> = UnionToIntersection14344<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14344<T extends unknown[], V> = [...T, V];

type TuplifyUnion14344<T, L = LastOf14344<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14344<TuplifyUnion14344<Exclude<T, L>>, L>;

type DeepPartial14344<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14344<T[P]> }
  : T;

type Paths14344<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14344<K, Paths14344<T[K], Prev14344[D]>> : never }[keyof T]
  : never;

type Prev14344 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14344<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14344 {
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

type ConfigPaths14344 = Paths14344<NestedConfig14344>;

interface HeavyProps14344 {
  config: DeepPartial14344<NestedConfig14344>;
  path?: ConfigPaths14344;
}

const HeavyComponent14344 = memo(function HeavyComponent14344({ config }: HeavyProps14344) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14344) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14344 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14344: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14344.displayName = 'HeavyComponent14344';
export default HeavyComponent14344;
