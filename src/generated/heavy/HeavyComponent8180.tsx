'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8180<T> = T extends (infer U)[]
  ? DeepReadonlyArray8180<U>
  : T extends object
  ? DeepReadonlyObject8180<T>
  : T;

interface DeepReadonlyArray8180<T> extends ReadonlyArray<DeepReadonly8180<T>> {}

type DeepReadonlyObject8180<T> = {
  readonly [P in keyof T]: DeepReadonly8180<T[P]>;
};

type UnionToIntersection8180<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8180<T> = UnionToIntersection8180<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8180<T extends unknown[], V> = [...T, V];

type TuplifyUnion8180<T, L = LastOf8180<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8180<TuplifyUnion8180<Exclude<T, L>>, L>;

type DeepPartial8180<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8180<T[P]> }
  : T;

type Paths8180<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8180<K, Paths8180<T[K], Prev8180[D]>> : never }[keyof T]
  : never;

type Prev8180 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8180<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8180 {
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

type ConfigPaths8180 = Paths8180<NestedConfig8180>;

interface HeavyProps8180 {
  config: DeepPartial8180<NestedConfig8180>;
  path?: ConfigPaths8180;
}

const HeavyComponent8180 = memo(function HeavyComponent8180({ config }: HeavyProps8180) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8180) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8180 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8180: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8180.displayName = 'HeavyComponent8180';
export default HeavyComponent8180;
