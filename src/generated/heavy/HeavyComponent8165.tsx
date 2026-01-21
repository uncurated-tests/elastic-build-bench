'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8165<T> = T extends (infer U)[]
  ? DeepReadonlyArray8165<U>
  : T extends object
  ? DeepReadonlyObject8165<T>
  : T;

interface DeepReadonlyArray8165<T> extends ReadonlyArray<DeepReadonly8165<T>> {}

type DeepReadonlyObject8165<T> = {
  readonly [P in keyof T]: DeepReadonly8165<T[P]>;
};

type UnionToIntersection8165<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8165<T> = UnionToIntersection8165<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8165<T extends unknown[], V> = [...T, V];

type TuplifyUnion8165<T, L = LastOf8165<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8165<TuplifyUnion8165<Exclude<T, L>>, L>;

type DeepPartial8165<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8165<T[P]> }
  : T;

type Paths8165<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8165<K, Paths8165<T[K], Prev8165[D]>> : never }[keyof T]
  : never;

type Prev8165 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8165<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8165 {
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

type ConfigPaths8165 = Paths8165<NestedConfig8165>;

interface HeavyProps8165 {
  config: DeepPartial8165<NestedConfig8165>;
  path?: ConfigPaths8165;
}

const HeavyComponent8165 = memo(function HeavyComponent8165({ config }: HeavyProps8165) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8165) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8165 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8165: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8165.displayName = 'HeavyComponent8165';
export default HeavyComponent8165;
