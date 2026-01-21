'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly940<T> = T extends (infer U)[]
  ? DeepReadonlyArray940<U>
  : T extends object
  ? DeepReadonlyObject940<T>
  : T;

interface DeepReadonlyArray940<T> extends ReadonlyArray<DeepReadonly940<T>> {}

type DeepReadonlyObject940<T> = {
  readonly [P in keyof T]: DeepReadonly940<T[P]>;
};

type UnionToIntersection940<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf940<T> = UnionToIntersection940<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push940<T extends unknown[], V> = [...T, V];

type TuplifyUnion940<T, L = LastOf940<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push940<TuplifyUnion940<Exclude<T, L>>, L>;

type DeepPartial940<T> = T extends object
  ? { [P in keyof T]?: DeepPartial940<T[P]> }
  : T;

type Paths940<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join940<K, Paths940<T[K], Prev940[D]>> : never }[keyof T]
  : never;

type Prev940 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join940<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig940 {
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

type ConfigPaths940 = Paths940<NestedConfig940>;

interface HeavyProps940 {
  config: DeepPartial940<NestedConfig940>;
  path?: ConfigPaths940;
}

const HeavyComponent940 = memo(function HeavyComponent940({ config }: HeavyProps940) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 940) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-940 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H940: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent940.displayName = 'HeavyComponent940';
export default HeavyComponent940;
