'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8272<T> = T extends (infer U)[]
  ? DeepReadonlyArray8272<U>
  : T extends object
  ? DeepReadonlyObject8272<T>
  : T;

interface DeepReadonlyArray8272<T> extends ReadonlyArray<DeepReadonly8272<T>> {}

type DeepReadonlyObject8272<T> = {
  readonly [P in keyof T]: DeepReadonly8272<T[P]>;
};

type UnionToIntersection8272<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8272<T> = UnionToIntersection8272<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8272<T extends unknown[], V> = [...T, V];

type TuplifyUnion8272<T, L = LastOf8272<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8272<TuplifyUnion8272<Exclude<T, L>>, L>;

type DeepPartial8272<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8272<T[P]> }
  : T;

type Paths8272<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8272<K, Paths8272<T[K], Prev8272[D]>> : never }[keyof T]
  : never;

type Prev8272 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8272<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8272 {
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

type ConfigPaths8272 = Paths8272<NestedConfig8272>;

interface HeavyProps8272 {
  config: DeepPartial8272<NestedConfig8272>;
  path?: ConfigPaths8272;
}

const HeavyComponent8272 = memo(function HeavyComponent8272({ config }: HeavyProps8272) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8272) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8272 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8272: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8272.displayName = 'HeavyComponent8272';
export default HeavyComponent8272;
