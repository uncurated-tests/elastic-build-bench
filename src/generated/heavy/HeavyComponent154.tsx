'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly154<T> = T extends (infer U)[]
  ? DeepReadonlyArray154<U>
  : T extends object
  ? DeepReadonlyObject154<T>
  : T;

interface DeepReadonlyArray154<T> extends ReadonlyArray<DeepReadonly154<T>> {}

type DeepReadonlyObject154<T> = {
  readonly [P in keyof T]: DeepReadonly154<T[P]>;
};

type UnionToIntersection154<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf154<T> = UnionToIntersection154<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push154<T extends unknown[], V> = [...T, V];

type TuplifyUnion154<T, L = LastOf154<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push154<TuplifyUnion154<Exclude<T, L>>, L>;

type DeepPartial154<T> = T extends object
  ? { [P in keyof T]?: DeepPartial154<T[P]> }
  : T;

type Paths154<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join154<K, Paths154<T[K], Prev154[D]>> : never }[keyof T]
  : never;

type Prev154 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join154<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig154 {
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

type ConfigPaths154 = Paths154<NestedConfig154>;

interface HeavyProps154 {
  config: DeepPartial154<NestedConfig154>;
  path?: ConfigPaths154;
}

const HeavyComponent154 = memo(function HeavyComponent154({ config }: HeavyProps154) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 154) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-154 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H154: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent154.displayName = 'HeavyComponent154';
export default HeavyComponent154;
