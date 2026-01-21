'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14776<T> = T extends (infer U)[]
  ? DeepReadonlyArray14776<U>
  : T extends object
  ? DeepReadonlyObject14776<T>
  : T;

interface DeepReadonlyArray14776<T> extends ReadonlyArray<DeepReadonly14776<T>> {}

type DeepReadonlyObject14776<T> = {
  readonly [P in keyof T]: DeepReadonly14776<T[P]>;
};

type UnionToIntersection14776<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14776<T> = UnionToIntersection14776<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14776<T extends unknown[], V> = [...T, V];

type TuplifyUnion14776<T, L = LastOf14776<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14776<TuplifyUnion14776<Exclude<T, L>>, L>;

type DeepPartial14776<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14776<T[P]> }
  : T;

type Paths14776<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14776<K, Paths14776<T[K], Prev14776[D]>> : never }[keyof T]
  : never;

type Prev14776 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14776<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14776 {
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

type ConfigPaths14776 = Paths14776<NestedConfig14776>;

interface HeavyProps14776 {
  config: DeepPartial14776<NestedConfig14776>;
  path?: ConfigPaths14776;
}

const HeavyComponent14776 = memo(function HeavyComponent14776({ config }: HeavyProps14776) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14776) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14776 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14776: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14776.displayName = 'HeavyComponent14776';
export default HeavyComponent14776;
