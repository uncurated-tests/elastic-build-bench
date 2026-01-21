'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8266<T> = T extends (infer U)[]
  ? DeepReadonlyArray8266<U>
  : T extends object
  ? DeepReadonlyObject8266<T>
  : T;

interface DeepReadonlyArray8266<T> extends ReadonlyArray<DeepReadonly8266<T>> {}

type DeepReadonlyObject8266<T> = {
  readonly [P in keyof T]: DeepReadonly8266<T[P]>;
};

type UnionToIntersection8266<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8266<T> = UnionToIntersection8266<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8266<T extends unknown[], V> = [...T, V];

type TuplifyUnion8266<T, L = LastOf8266<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8266<TuplifyUnion8266<Exclude<T, L>>, L>;

type DeepPartial8266<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8266<T[P]> }
  : T;

type Paths8266<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8266<K, Paths8266<T[K], Prev8266[D]>> : never }[keyof T]
  : never;

type Prev8266 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8266<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8266 {
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

type ConfigPaths8266 = Paths8266<NestedConfig8266>;

interface HeavyProps8266 {
  config: DeepPartial8266<NestedConfig8266>;
  path?: ConfigPaths8266;
}

const HeavyComponent8266 = memo(function HeavyComponent8266({ config }: HeavyProps8266) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8266) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8266 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8266: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8266.displayName = 'HeavyComponent8266';
export default HeavyComponent8266;
