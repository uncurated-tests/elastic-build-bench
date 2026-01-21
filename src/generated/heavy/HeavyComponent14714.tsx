'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14714<T> = T extends (infer U)[]
  ? DeepReadonlyArray14714<U>
  : T extends object
  ? DeepReadonlyObject14714<T>
  : T;

interface DeepReadonlyArray14714<T> extends ReadonlyArray<DeepReadonly14714<T>> {}

type DeepReadonlyObject14714<T> = {
  readonly [P in keyof T]: DeepReadonly14714<T[P]>;
};

type UnionToIntersection14714<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14714<T> = UnionToIntersection14714<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14714<T extends unknown[], V> = [...T, V];

type TuplifyUnion14714<T, L = LastOf14714<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14714<TuplifyUnion14714<Exclude<T, L>>, L>;

type DeepPartial14714<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14714<T[P]> }
  : T;

type Paths14714<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14714<K, Paths14714<T[K], Prev14714[D]>> : never }[keyof T]
  : never;

type Prev14714 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14714<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14714 {
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

type ConfigPaths14714 = Paths14714<NestedConfig14714>;

interface HeavyProps14714 {
  config: DeepPartial14714<NestedConfig14714>;
  path?: ConfigPaths14714;
}

const HeavyComponent14714 = memo(function HeavyComponent14714({ config }: HeavyProps14714) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14714) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14714 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14714: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14714.displayName = 'HeavyComponent14714';
export default HeavyComponent14714;
