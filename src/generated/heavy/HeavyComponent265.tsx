'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly265<T> = T extends (infer U)[]
  ? DeepReadonlyArray265<U>
  : T extends object
  ? DeepReadonlyObject265<T>
  : T;

interface DeepReadonlyArray265<T> extends ReadonlyArray<DeepReadonly265<T>> {}

type DeepReadonlyObject265<T> = {
  readonly [P in keyof T]: DeepReadonly265<T[P]>;
};

type UnionToIntersection265<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf265<T> = UnionToIntersection265<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push265<T extends unknown[], V> = [...T, V];

type TuplifyUnion265<T, L = LastOf265<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push265<TuplifyUnion265<Exclude<T, L>>, L>;

type DeepPartial265<T> = T extends object
  ? { [P in keyof T]?: DeepPartial265<T[P]> }
  : T;

type Paths265<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join265<K, Paths265<T[K], Prev265[D]>> : never }[keyof T]
  : never;

type Prev265 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join265<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig265 {
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

type ConfigPaths265 = Paths265<NestedConfig265>;

interface HeavyProps265 {
  config: DeepPartial265<NestedConfig265>;
  path?: ConfigPaths265;
}

const HeavyComponent265 = memo(function HeavyComponent265({ config }: HeavyProps265) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 265) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-265 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H265: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent265.displayName = 'HeavyComponent265';
export default HeavyComponent265;
