'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14830<T> = T extends (infer U)[]
  ? DeepReadonlyArray14830<U>
  : T extends object
  ? DeepReadonlyObject14830<T>
  : T;

interface DeepReadonlyArray14830<T> extends ReadonlyArray<DeepReadonly14830<T>> {}

type DeepReadonlyObject14830<T> = {
  readonly [P in keyof T]: DeepReadonly14830<T[P]>;
};

type UnionToIntersection14830<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14830<T> = UnionToIntersection14830<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14830<T extends unknown[], V> = [...T, V];

type TuplifyUnion14830<T, L = LastOf14830<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14830<TuplifyUnion14830<Exclude<T, L>>, L>;

type DeepPartial14830<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14830<T[P]> }
  : T;

type Paths14830<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14830<K, Paths14830<T[K], Prev14830[D]>> : never }[keyof T]
  : never;

type Prev14830 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14830<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14830 {
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

type ConfigPaths14830 = Paths14830<NestedConfig14830>;

interface HeavyProps14830 {
  config: DeepPartial14830<NestedConfig14830>;
  path?: ConfigPaths14830;
}

const HeavyComponent14830 = memo(function HeavyComponent14830({ config }: HeavyProps14830) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14830) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14830 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14830: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14830.displayName = 'HeavyComponent14830';
export default HeavyComponent14830;
