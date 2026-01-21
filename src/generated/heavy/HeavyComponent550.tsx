'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly550<T> = T extends (infer U)[]
  ? DeepReadonlyArray550<U>
  : T extends object
  ? DeepReadonlyObject550<T>
  : T;

interface DeepReadonlyArray550<T> extends ReadonlyArray<DeepReadonly550<T>> {}

type DeepReadonlyObject550<T> = {
  readonly [P in keyof T]: DeepReadonly550<T[P]>;
};

type UnionToIntersection550<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf550<T> = UnionToIntersection550<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push550<T extends unknown[], V> = [...T, V];

type TuplifyUnion550<T, L = LastOf550<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push550<TuplifyUnion550<Exclude<T, L>>, L>;

type DeepPartial550<T> = T extends object
  ? { [P in keyof T]?: DeepPartial550<T[P]> }
  : T;

type Paths550<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join550<K, Paths550<T[K], Prev550[D]>> : never }[keyof T]
  : never;

type Prev550 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join550<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig550 {
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

type ConfigPaths550 = Paths550<NestedConfig550>;

interface HeavyProps550 {
  config: DeepPartial550<NestedConfig550>;
  path?: ConfigPaths550;
}

const HeavyComponent550 = memo(function HeavyComponent550({ config }: HeavyProps550) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 550) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-550 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H550: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent550.displayName = 'HeavyComponent550';
export default HeavyComponent550;
