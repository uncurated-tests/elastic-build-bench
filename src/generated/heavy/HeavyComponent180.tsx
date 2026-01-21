'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly180<T> = T extends (infer U)[]
  ? DeepReadonlyArray180<U>
  : T extends object
  ? DeepReadonlyObject180<T>
  : T;

interface DeepReadonlyArray180<T> extends ReadonlyArray<DeepReadonly180<T>> {}

type DeepReadonlyObject180<T> = {
  readonly [P in keyof T]: DeepReadonly180<T[P]>;
};

type UnionToIntersection180<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf180<T> = UnionToIntersection180<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push180<T extends unknown[], V> = [...T, V];

type TuplifyUnion180<T, L = LastOf180<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push180<TuplifyUnion180<Exclude<T, L>>, L>;

type DeepPartial180<T> = T extends object
  ? { [P in keyof T]?: DeepPartial180<T[P]> }
  : T;

type Paths180<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join180<K, Paths180<T[K], Prev180[D]>> : never }[keyof T]
  : never;

type Prev180 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join180<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig180 {
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

type ConfigPaths180 = Paths180<NestedConfig180>;

interface HeavyProps180 {
  config: DeepPartial180<NestedConfig180>;
  path?: ConfigPaths180;
}

const HeavyComponent180 = memo(function HeavyComponent180({ config }: HeavyProps180) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 180) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-180 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H180: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent180.displayName = 'HeavyComponent180';
export default HeavyComponent180;
