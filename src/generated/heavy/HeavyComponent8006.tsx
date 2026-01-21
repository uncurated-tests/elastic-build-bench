'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8006<T> = T extends (infer U)[]
  ? DeepReadonlyArray8006<U>
  : T extends object
  ? DeepReadonlyObject8006<T>
  : T;

interface DeepReadonlyArray8006<T> extends ReadonlyArray<DeepReadonly8006<T>> {}

type DeepReadonlyObject8006<T> = {
  readonly [P in keyof T]: DeepReadonly8006<T[P]>;
};

type UnionToIntersection8006<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8006<T> = UnionToIntersection8006<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8006<T extends unknown[], V> = [...T, V];

type TuplifyUnion8006<T, L = LastOf8006<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8006<TuplifyUnion8006<Exclude<T, L>>, L>;

type DeepPartial8006<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8006<T[P]> }
  : T;

type Paths8006<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8006<K, Paths8006<T[K], Prev8006[D]>> : never }[keyof T]
  : never;

type Prev8006 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8006<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8006 {
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

type ConfigPaths8006 = Paths8006<NestedConfig8006>;

interface HeavyProps8006 {
  config: DeepPartial8006<NestedConfig8006>;
  path?: ConfigPaths8006;
}

const HeavyComponent8006 = memo(function HeavyComponent8006({ config }: HeavyProps8006) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8006) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8006 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8006: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8006.displayName = 'HeavyComponent8006';
export default HeavyComponent8006;
