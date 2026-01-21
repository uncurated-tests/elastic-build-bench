'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8881<T> = T extends (infer U)[]
  ? DeepReadonlyArray8881<U>
  : T extends object
  ? DeepReadonlyObject8881<T>
  : T;

interface DeepReadonlyArray8881<T> extends ReadonlyArray<DeepReadonly8881<T>> {}

type DeepReadonlyObject8881<T> = {
  readonly [P in keyof T]: DeepReadonly8881<T[P]>;
};

type UnionToIntersection8881<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8881<T> = UnionToIntersection8881<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8881<T extends unknown[], V> = [...T, V];

type TuplifyUnion8881<T, L = LastOf8881<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8881<TuplifyUnion8881<Exclude<T, L>>, L>;

type DeepPartial8881<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8881<T[P]> }
  : T;

type Paths8881<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8881<K, Paths8881<T[K], Prev8881[D]>> : never }[keyof T]
  : never;

type Prev8881 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8881<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8881 {
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

type ConfigPaths8881 = Paths8881<NestedConfig8881>;

interface HeavyProps8881 {
  config: DeepPartial8881<NestedConfig8881>;
  path?: ConfigPaths8881;
}

const HeavyComponent8881 = memo(function HeavyComponent8881({ config }: HeavyProps8881) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8881) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8881 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8881: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8881.displayName = 'HeavyComponent8881';
export default HeavyComponent8881;
