'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8948<T> = T extends (infer U)[]
  ? DeepReadonlyArray8948<U>
  : T extends object
  ? DeepReadonlyObject8948<T>
  : T;

interface DeepReadonlyArray8948<T> extends ReadonlyArray<DeepReadonly8948<T>> {}

type DeepReadonlyObject8948<T> = {
  readonly [P in keyof T]: DeepReadonly8948<T[P]>;
};

type UnionToIntersection8948<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8948<T> = UnionToIntersection8948<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8948<T extends unknown[], V> = [...T, V];

type TuplifyUnion8948<T, L = LastOf8948<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8948<TuplifyUnion8948<Exclude<T, L>>, L>;

type DeepPartial8948<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8948<T[P]> }
  : T;

type Paths8948<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8948<K, Paths8948<T[K], Prev8948[D]>> : never }[keyof T]
  : never;

type Prev8948 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8948<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8948 {
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

type ConfigPaths8948 = Paths8948<NestedConfig8948>;

interface HeavyProps8948 {
  config: DeepPartial8948<NestedConfig8948>;
  path?: ConfigPaths8948;
}

const HeavyComponent8948 = memo(function HeavyComponent8948({ config }: HeavyProps8948) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8948) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8948 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8948: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8948.displayName = 'HeavyComponent8948';
export default HeavyComponent8948;
