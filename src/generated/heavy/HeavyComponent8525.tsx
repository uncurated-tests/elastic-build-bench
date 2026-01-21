'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8525<T> = T extends (infer U)[]
  ? DeepReadonlyArray8525<U>
  : T extends object
  ? DeepReadonlyObject8525<T>
  : T;

interface DeepReadonlyArray8525<T> extends ReadonlyArray<DeepReadonly8525<T>> {}

type DeepReadonlyObject8525<T> = {
  readonly [P in keyof T]: DeepReadonly8525<T[P]>;
};

type UnionToIntersection8525<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8525<T> = UnionToIntersection8525<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8525<T extends unknown[], V> = [...T, V];

type TuplifyUnion8525<T, L = LastOf8525<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8525<TuplifyUnion8525<Exclude<T, L>>, L>;

type DeepPartial8525<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8525<T[P]> }
  : T;

type Paths8525<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8525<K, Paths8525<T[K], Prev8525[D]>> : never }[keyof T]
  : never;

type Prev8525 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8525<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8525 {
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

type ConfigPaths8525 = Paths8525<NestedConfig8525>;

interface HeavyProps8525 {
  config: DeepPartial8525<NestedConfig8525>;
  path?: ConfigPaths8525;
}

const HeavyComponent8525 = memo(function HeavyComponent8525({ config }: HeavyProps8525) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8525) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8525 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8525: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8525.displayName = 'HeavyComponent8525';
export default HeavyComponent8525;
