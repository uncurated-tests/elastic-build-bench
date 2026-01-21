'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8993<T> = T extends (infer U)[]
  ? DeepReadonlyArray8993<U>
  : T extends object
  ? DeepReadonlyObject8993<T>
  : T;

interface DeepReadonlyArray8993<T> extends ReadonlyArray<DeepReadonly8993<T>> {}

type DeepReadonlyObject8993<T> = {
  readonly [P in keyof T]: DeepReadonly8993<T[P]>;
};

type UnionToIntersection8993<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8993<T> = UnionToIntersection8993<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8993<T extends unknown[], V> = [...T, V];

type TuplifyUnion8993<T, L = LastOf8993<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8993<TuplifyUnion8993<Exclude<T, L>>, L>;

type DeepPartial8993<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8993<T[P]> }
  : T;

type Paths8993<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8993<K, Paths8993<T[K], Prev8993[D]>> : never }[keyof T]
  : never;

type Prev8993 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8993<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8993 {
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

type ConfigPaths8993 = Paths8993<NestedConfig8993>;

interface HeavyProps8993 {
  config: DeepPartial8993<NestedConfig8993>;
  path?: ConfigPaths8993;
}

const HeavyComponent8993 = memo(function HeavyComponent8993({ config }: HeavyProps8993) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8993) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8993 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8993: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8993.displayName = 'HeavyComponent8993';
export default HeavyComponent8993;
