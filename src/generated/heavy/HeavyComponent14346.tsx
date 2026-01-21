'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14346<T> = T extends (infer U)[]
  ? DeepReadonlyArray14346<U>
  : T extends object
  ? DeepReadonlyObject14346<T>
  : T;

interface DeepReadonlyArray14346<T> extends ReadonlyArray<DeepReadonly14346<T>> {}

type DeepReadonlyObject14346<T> = {
  readonly [P in keyof T]: DeepReadonly14346<T[P]>;
};

type UnionToIntersection14346<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14346<T> = UnionToIntersection14346<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14346<T extends unknown[], V> = [...T, V];

type TuplifyUnion14346<T, L = LastOf14346<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14346<TuplifyUnion14346<Exclude<T, L>>, L>;

type DeepPartial14346<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14346<T[P]> }
  : T;

type Paths14346<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14346<K, Paths14346<T[K], Prev14346[D]>> : never }[keyof T]
  : never;

type Prev14346 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14346<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14346 {
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

type ConfigPaths14346 = Paths14346<NestedConfig14346>;

interface HeavyProps14346 {
  config: DeepPartial14346<NestedConfig14346>;
  path?: ConfigPaths14346;
}

const HeavyComponent14346 = memo(function HeavyComponent14346({ config }: HeavyProps14346) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14346) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14346 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14346: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14346.displayName = 'HeavyComponent14346';
export default HeavyComponent14346;
