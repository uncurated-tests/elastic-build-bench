'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14490<T> = T extends (infer U)[]
  ? DeepReadonlyArray14490<U>
  : T extends object
  ? DeepReadonlyObject14490<T>
  : T;

interface DeepReadonlyArray14490<T> extends ReadonlyArray<DeepReadonly14490<T>> {}

type DeepReadonlyObject14490<T> = {
  readonly [P in keyof T]: DeepReadonly14490<T[P]>;
};

type UnionToIntersection14490<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14490<T> = UnionToIntersection14490<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14490<T extends unknown[], V> = [...T, V];

type TuplifyUnion14490<T, L = LastOf14490<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14490<TuplifyUnion14490<Exclude<T, L>>, L>;

type DeepPartial14490<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14490<T[P]> }
  : T;

type Paths14490<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14490<K, Paths14490<T[K], Prev14490[D]>> : never }[keyof T]
  : never;

type Prev14490 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14490<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14490 {
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

type ConfigPaths14490 = Paths14490<NestedConfig14490>;

interface HeavyProps14490 {
  config: DeepPartial14490<NestedConfig14490>;
  path?: ConfigPaths14490;
}

const HeavyComponent14490 = memo(function HeavyComponent14490({ config }: HeavyProps14490) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14490) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14490 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14490: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14490.displayName = 'HeavyComponent14490';
export default HeavyComponent14490;
