'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14752<T> = T extends (infer U)[]
  ? DeepReadonlyArray14752<U>
  : T extends object
  ? DeepReadonlyObject14752<T>
  : T;

interface DeepReadonlyArray14752<T> extends ReadonlyArray<DeepReadonly14752<T>> {}

type DeepReadonlyObject14752<T> = {
  readonly [P in keyof T]: DeepReadonly14752<T[P]>;
};

type UnionToIntersection14752<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14752<T> = UnionToIntersection14752<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14752<T extends unknown[], V> = [...T, V];

type TuplifyUnion14752<T, L = LastOf14752<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14752<TuplifyUnion14752<Exclude<T, L>>, L>;

type DeepPartial14752<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14752<T[P]> }
  : T;

type Paths14752<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14752<K, Paths14752<T[K], Prev14752[D]>> : never }[keyof T]
  : never;

type Prev14752 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14752<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14752 {
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

type ConfigPaths14752 = Paths14752<NestedConfig14752>;

interface HeavyProps14752 {
  config: DeepPartial14752<NestedConfig14752>;
  path?: ConfigPaths14752;
}

const HeavyComponent14752 = memo(function HeavyComponent14752({ config }: HeavyProps14752) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14752) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14752 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14752: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14752.displayName = 'HeavyComponent14752';
export default HeavyComponent14752;
