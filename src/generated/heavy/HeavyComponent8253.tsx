'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8253<T> = T extends (infer U)[]
  ? DeepReadonlyArray8253<U>
  : T extends object
  ? DeepReadonlyObject8253<T>
  : T;

interface DeepReadonlyArray8253<T> extends ReadonlyArray<DeepReadonly8253<T>> {}

type DeepReadonlyObject8253<T> = {
  readonly [P in keyof T]: DeepReadonly8253<T[P]>;
};

type UnionToIntersection8253<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8253<T> = UnionToIntersection8253<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8253<T extends unknown[], V> = [...T, V];

type TuplifyUnion8253<T, L = LastOf8253<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8253<TuplifyUnion8253<Exclude<T, L>>, L>;

type DeepPartial8253<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8253<T[P]> }
  : T;

type Paths8253<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8253<K, Paths8253<T[K], Prev8253[D]>> : never }[keyof T]
  : never;

type Prev8253 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8253<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8253 {
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

type ConfigPaths8253 = Paths8253<NestedConfig8253>;

interface HeavyProps8253 {
  config: DeepPartial8253<NestedConfig8253>;
  path?: ConfigPaths8253;
}

const HeavyComponent8253 = memo(function HeavyComponent8253({ config }: HeavyProps8253) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8253) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8253 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8253: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8253.displayName = 'HeavyComponent8253';
export default HeavyComponent8253;
