'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8802<T> = T extends (infer U)[]
  ? DeepReadonlyArray8802<U>
  : T extends object
  ? DeepReadonlyObject8802<T>
  : T;

interface DeepReadonlyArray8802<T> extends ReadonlyArray<DeepReadonly8802<T>> {}

type DeepReadonlyObject8802<T> = {
  readonly [P in keyof T]: DeepReadonly8802<T[P]>;
};

type UnionToIntersection8802<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8802<T> = UnionToIntersection8802<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8802<T extends unknown[], V> = [...T, V];

type TuplifyUnion8802<T, L = LastOf8802<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8802<TuplifyUnion8802<Exclude<T, L>>, L>;

type DeepPartial8802<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8802<T[P]> }
  : T;

type Paths8802<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8802<K, Paths8802<T[K], Prev8802[D]>> : never }[keyof T]
  : never;

type Prev8802 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8802<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8802 {
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

type ConfigPaths8802 = Paths8802<NestedConfig8802>;

interface HeavyProps8802 {
  config: DeepPartial8802<NestedConfig8802>;
  path?: ConfigPaths8802;
}

const HeavyComponent8802 = memo(function HeavyComponent8802({ config }: HeavyProps8802) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8802) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8802 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8802: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8802.displayName = 'HeavyComponent8802';
export default HeavyComponent8802;
