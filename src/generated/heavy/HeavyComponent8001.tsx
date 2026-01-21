'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8001<T> = T extends (infer U)[]
  ? DeepReadonlyArray8001<U>
  : T extends object
  ? DeepReadonlyObject8001<T>
  : T;

interface DeepReadonlyArray8001<T> extends ReadonlyArray<DeepReadonly8001<T>> {}

type DeepReadonlyObject8001<T> = {
  readonly [P in keyof T]: DeepReadonly8001<T[P]>;
};

type UnionToIntersection8001<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8001<T> = UnionToIntersection8001<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8001<T extends unknown[], V> = [...T, V];

type TuplifyUnion8001<T, L = LastOf8001<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8001<TuplifyUnion8001<Exclude<T, L>>, L>;

type DeepPartial8001<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8001<T[P]> }
  : T;

type Paths8001<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8001<K, Paths8001<T[K], Prev8001[D]>> : never }[keyof T]
  : never;

type Prev8001 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8001<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8001 {
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

type ConfigPaths8001 = Paths8001<NestedConfig8001>;

interface HeavyProps8001 {
  config: DeepPartial8001<NestedConfig8001>;
  path?: ConfigPaths8001;
}

const HeavyComponent8001 = memo(function HeavyComponent8001({ config }: HeavyProps8001) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8001) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8001 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8001: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8001.displayName = 'HeavyComponent8001';
export default HeavyComponent8001;
