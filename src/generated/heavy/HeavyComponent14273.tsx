'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14273<T> = T extends (infer U)[]
  ? DeepReadonlyArray14273<U>
  : T extends object
  ? DeepReadonlyObject14273<T>
  : T;

interface DeepReadonlyArray14273<T> extends ReadonlyArray<DeepReadonly14273<T>> {}

type DeepReadonlyObject14273<T> = {
  readonly [P in keyof T]: DeepReadonly14273<T[P]>;
};

type UnionToIntersection14273<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14273<T> = UnionToIntersection14273<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14273<T extends unknown[], V> = [...T, V];

type TuplifyUnion14273<T, L = LastOf14273<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14273<TuplifyUnion14273<Exclude<T, L>>, L>;

type DeepPartial14273<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14273<T[P]> }
  : T;

type Paths14273<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14273<K, Paths14273<T[K], Prev14273[D]>> : never }[keyof T]
  : never;

type Prev14273 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14273<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14273 {
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

type ConfigPaths14273 = Paths14273<NestedConfig14273>;

interface HeavyProps14273 {
  config: DeepPartial14273<NestedConfig14273>;
  path?: ConfigPaths14273;
}

const HeavyComponent14273 = memo(function HeavyComponent14273({ config }: HeavyProps14273) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14273) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14273 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14273: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14273.displayName = 'HeavyComponent14273';
export default HeavyComponent14273;
