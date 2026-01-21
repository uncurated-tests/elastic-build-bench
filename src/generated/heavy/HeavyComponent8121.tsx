'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8121<T> = T extends (infer U)[]
  ? DeepReadonlyArray8121<U>
  : T extends object
  ? DeepReadonlyObject8121<T>
  : T;

interface DeepReadonlyArray8121<T> extends ReadonlyArray<DeepReadonly8121<T>> {}

type DeepReadonlyObject8121<T> = {
  readonly [P in keyof T]: DeepReadonly8121<T[P]>;
};

type UnionToIntersection8121<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8121<T> = UnionToIntersection8121<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8121<T extends unknown[], V> = [...T, V];

type TuplifyUnion8121<T, L = LastOf8121<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8121<TuplifyUnion8121<Exclude<T, L>>, L>;

type DeepPartial8121<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8121<T[P]> }
  : T;

type Paths8121<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8121<K, Paths8121<T[K], Prev8121[D]>> : never }[keyof T]
  : never;

type Prev8121 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8121<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8121 {
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

type ConfigPaths8121 = Paths8121<NestedConfig8121>;

interface HeavyProps8121 {
  config: DeepPartial8121<NestedConfig8121>;
  path?: ConfigPaths8121;
}

const HeavyComponent8121 = memo(function HeavyComponent8121({ config }: HeavyProps8121) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8121) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8121 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8121: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8121.displayName = 'HeavyComponent8121';
export default HeavyComponent8121;
