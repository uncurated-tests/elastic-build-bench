'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly993<T> = T extends (infer U)[]
  ? DeepReadonlyArray993<U>
  : T extends object
  ? DeepReadonlyObject993<T>
  : T;

interface DeepReadonlyArray993<T> extends ReadonlyArray<DeepReadonly993<T>> {}

type DeepReadonlyObject993<T> = {
  readonly [P in keyof T]: DeepReadonly993<T[P]>;
};

type UnionToIntersection993<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf993<T> = UnionToIntersection993<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push993<T extends unknown[], V> = [...T, V];

type TuplifyUnion993<T, L = LastOf993<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push993<TuplifyUnion993<Exclude<T, L>>, L>;

type DeepPartial993<T> = T extends object
  ? { [P in keyof T]?: DeepPartial993<T[P]> }
  : T;

type Paths993<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join993<K, Paths993<T[K], Prev993[D]>> : never }[keyof T]
  : never;

type Prev993 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join993<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig993 {
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

type ConfigPaths993 = Paths993<NestedConfig993>;

interface HeavyProps993 {
  config: DeepPartial993<NestedConfig993>;
  path?: ConfigPaths993;
}

const HeavyComponent993 = memo(function HeavyComponent993({ config }: HeavyProps993) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 993) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-993 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H993: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent993.displayName = 'HeavyComponent993';
export default HeavyComponent993;
