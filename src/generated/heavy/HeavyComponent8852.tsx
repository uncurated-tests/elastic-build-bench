'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8852<T> = T extends (infer U)[]
  ? DeepReadonlyArray8852<U>
  : T extends object
  ? DeepReadonlyObject8852<T>
  : T;

interface DeepReadonlyArray8852<T> extends ReadonlyArray<DeepReadonly8852<T>> {}

type DeepReadonlyObject8852<T> = {
  readonly [P in keyof T]: DeepReadonly8852<T[P]>;
};

type UnionToIntersection8852<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8852<T> = UnionToIntersection8852<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8852<T extends unknown[], V> = [...T, V];

type TuplifyUnion8852<T, L = LastOf8852<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8852<TuplifyUnion8852<Exclude<T, L>>, L>;

type DeepPartial8852<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8852<T[P]> }
  : T;

type Paths8852<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8852<K, Paths8852<T[K], Prev8852[D]>> : never }[keyof T]
  : never;

type Prev8852 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8852<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8852 {
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

type ConfigPaths8852 = Paths8852<NestedConfig8852>;

interface HeavyProps8852 {
  config: DeepPartial8852<NestedConfig8852>;
  path?: ConfigPaths8852;
}

const HeavyComponent8852 = memo(function HeavyComponent8852({ config }: HeavyProps8852) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8852) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8852 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8852: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8852.displayName = 'HeavyComponent8852';
export default HeavyComponent8852;
