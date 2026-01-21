'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14672<T> = T extends (infer U)[]
  ? DeepReadonlyArray14672<U>
  : T extends object
  ? DeepReadonlyObject14672<T>
  : T;

interface DeepReadonlyArray14672<T> extends ReadonlyArray<DeepReadonly14672<T>> {}

type DeepReadonlyObject14672<T> = {
  readonly [P in keyof T]: DeepReadonly14672<T[P]>;
};

type UnionToIntersection14672<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14672<T> = UnionToIntersection14672<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14672<T extends unknown[], V> = [...T, V];

type TuplifyUnion14672<T, L = LastOf14672<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14672<TuplifyUnion14672<Exclude<T, L>>, L>;

type DeepPartial14672<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14672<T[P]> }
  : T;

type Paths14672<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14672<K, Paths14672<T[K], Prev14672[D]>> : never }[keyof T]
  : never;

type Prev14672 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14672<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14672 {
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

type ConfigPaths14672 = Paths14672<NestedConfig14672>;

interface HeavyProps14672 {
  config: DeepPartial14672<NestedConfig14672>;
  path?: ConfigPaths14672;
}

const HeavyComponent14672 = memo(function HeavyComponent14672({ config }: HeavyProps14672) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14672) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14672 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14672: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14672.displayName = 'HeavyComponent14672';
export default HeavyComponent14672;
