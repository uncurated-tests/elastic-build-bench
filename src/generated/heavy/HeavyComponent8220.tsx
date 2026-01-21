'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8220<T> = T extends (infer U)[]
  ? DeepReadonlyArray8220<U>
  : T extends object
  ? DeepReadonlyObject8220<T>
  : T;

interface DeepReadonlyArray8220<T> extends ReadonlyArray<DeepReadonly8220<T>> {}

type DeepReadonlyObject8220<T> = {
  readonly [P in keyof T]: DeepReadonly8220<T[P]>;
};

type UnionToIntersection8220<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8220<T> = UnionToIntersection8220<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8220<T extends unknown[], V> = [...T, V];

type TuplifyUnion8220<T, L = LastOf8220<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8220<TuplifyUnion8220<Exclude<T, L>>, L>;

type DeepPartial8220<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8220<T[P]> }
  : T;

type Paths8220<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8220<K, Paths8220<T[K], Prev8220[D]>> : never }[keyof T]
  : never;

type Prev8220 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8220<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8220 {
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

type ConfigPaths8220 = Paths8220<NestedConfig8220>;

interface HeavyProps8220 {
  config: DeepPartial8220<NestedConfig8220>;
  path?: ConfigPaths8220;
}

const HeavyComponent8220 = memo(function HeavyComponent8220({ config }: HeavyProps8220) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8220) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8220 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8220: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8220.displayName = 'HeavyComponent8220';
export default HeavyComponent8220;
