'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8387<T> = T extends (infer U)[]
  ? DeepReadonlyArray8387<U>
  : T extends object
  ? DeepReadonlyObject8387<T>
  : T;

interface DeepReadonlyArray8387<T> extends ReadonlyArray<DeepReadonly8387<T>> {}

type DeepReadonlyObject8387<T> = {
  readonly [P in keyof T]: DeepReadonly8387<T[P]>;
};

type UnionToIntersection8387<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8387<T> = UnionToIntersection8387<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8387<T extends unknown[], V> = [...T, V];

type TuplifyUnion8387<T, L = LastOf8387<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8387<TuplifyUnion8387<Exclude<T, L>>, L>;

type DeepPartial8387<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8387<T[P]> }
  : T;

type Paths8387<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8387<K, Paths8387<T[K], Prev8387[D]>> : never }[keyof T]
  : never;

type Prev8387 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8387<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8387 {
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

type ConfigPaths8387 = Paths8387<NestedConfig8387>;

interface HeavyProps8387 {
  config: DeepPartial8387<NestedConfig8387>;
  path?: ConfigPaths8387;
}

const HeavyComponent8387 = memo(function HeavyComponent8387({ config }: HeavyProps8387) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8387) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8387 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8387: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8387.displayName = 'HeavyComponent8387';
export default HeavyComponent8387;
