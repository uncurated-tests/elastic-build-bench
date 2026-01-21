'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8002<T> = T extends (infer U)[]
  ? DeepReadonlyArray8002<U>
  : T extends object
  ? DeepReadonlyObject8002<T>
  : T;

interface DeepReadonlyArray8002<T> extends ReadonlyArray<DeepReadonly8002<T>> {}

type DeepReadonlyObject8002<T> = {
  readonly [P in keyof T]: DeepReadonly8002<T[P]>;
};

type UnionToIntersection8002<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8002<T> = UnionToIntersection8002<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8002<T extends unknown[], V> = [...T, V];

type TuplifyUnion8002<T, L = LastOf8002<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8002<TuplifyUnion8002<Exclude<T, L>>, L>;

type DeepPartial8002<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8002<T[P]> }
  : T;

type Paths8002<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8002<K, Paths8002<T[K], Prev8002[D]>> : never }[keyof T]
  : never;

type Prev8002 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8002<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8002 {
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

type ConfigPaths8002 = Paths8002<NestedConfig8002>;

interface HeavyProps8002 {
  config: DeepPartial8002<NestedConfig8002>;
  path?: ConfigPaths8002;
}

const HeavyComponent8002 = memo(function HeavyComponent8002({ config }: HeavyProps8002) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8002) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8002 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8002: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8002.displayName = 'HeavyComponent8002';
export default HeavyComponent8002;
