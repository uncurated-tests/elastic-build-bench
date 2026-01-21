'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly802<T> = T extends (infer U)[]
  ? DeepReadonlyArray802<U>
  : T extends object
  ? DeepReadonlyObject802<T>
  : T;

interface DeepReadonlyArray802<T> extends ReadonlyArray<DeepReadonly802<T>> {}

type DeepReadonlyObject802<T> = {
  readonly [P in keyof T]: DeepReadonly802<T[P]>;
};

type UnionToIntersection802<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf802<T> = UnionToIntersection802<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push802<T extends unknown[], V> = [...T, V];

type TuplifyUnion802<T, L = LastOf802<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push802<TuplifyUnion802<Exclude<T, L>>, L>;

type DeepPartial802<T> = T extends object
  ? { [P in keyof T]?: DeepPartial802<T[P]> }
  : T;

type Paths802<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join802<K, Paths802<T[K], Prev802[D]>> : never }[keyof T]
  : never;

type Prev802 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join802<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig802 {
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

type ConfigPaths802 = Paths802<NestedConfig802>;

interface HeavyProps802 {
  config: DeepPartial802<NestedConfig802>;
  path?: ConfigPaths802;
}

const HeavyComponent802 = memo(function HeavyComponent802({ config }: HeavyProps802) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 802) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-802 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H802: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent802.displayName = 'HeavyComponent802';
export default HeavyComponent802;
