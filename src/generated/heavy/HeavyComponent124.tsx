'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly124<T> = T extends (infer U)[]
  ? DeepReadonlyArray124<U>
  : T extends object
  ? DeepReadonlyObject124<T>
  : T;

interface DeepReadonlyArray124<T> extends ReadonlyArray<DeepReadonly124<T>> {}

type DeepReadonlyObject124<T> = {
  readonly [P in keyof T]: DeepReadonly124<T[P]>;
};

type UnionToIntersection124<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf124<T> = UnionToIntersection124<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push124<T extends unknown[], V> = [...T, V];

type TuplifyUnion124<T, L = LastOf124<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push124<TuplifyUnion124<Exclude<T, L>>, L>;

type DeepPartial124<T> = T extends object
  ? { [P in keyof T]?: DeepPartial124<T[P]> }
  : T;

type Paths124<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join124<K, Paths124<T[K], Prev124[D]>> : never }[keyof T]
  : never;

type Prev124 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join124<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig124 {
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

type ConfigPaths124 = Paths124<NestedConfig124>;

interface HeavyProps124 {
  config: DeepPartial124<NestedConfig124>;
  path?: ConfigPaths124;
}

const HeavyComponent124 = memo(function HeavyComponent124({ config }: HeavyProps124) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 124) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-124 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H124: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent124.displayName = 'HeavyComponent124';
export default HeavyComponent124;
