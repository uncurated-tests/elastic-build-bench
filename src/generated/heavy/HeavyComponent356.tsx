'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly356<T> = T extends (infer U)[]
  ? DeepReadonlyArray356<U>
  : T extends object
  ? DeepReadonlyObject356<T>
  : T;

interface DeepReadonlyArray356<T> extends ReadonlyArray<DeepReadonly356<T>> {}

type DeepReadonlyObject356<T> = {
  readonly [P in keyof T]: DeepReadonly356<T[P]>;
};

type UnionToIntersection356<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf356<T> = UnionToIntersection356<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push356<T extends unknown[], V> = [...T, V];

type TuplifyUnion356<T, L = LastOf356<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push356<TuplifyUnion356<Exclude<T, L>>, L>;

type DeepPartial356<T> = T extends object
  ? { [P in keyof T]?: DeepPartial356<T[P]> }
  : T;

type Paths356<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join356<K, Paths356<T[K], Prev356[D]>> : never }[keyof T]
  : never;

type Prev356 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join356<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig356 {
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

type ConfigPaths356 = Paths356<NestedConfig356>;

interface HeavyProps356 {
  config: DeepPartial356<NestedConfig356>;
  path?: ConfigPaths356;
}

const HeavyComponent356 = memo(function HeavyComponent356({ config }: HeavyProps356) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 356) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-356 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H356: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent356.displayName = 'HeavyComponent356';
export default HeavyComponent356;
