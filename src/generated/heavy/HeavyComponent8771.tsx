'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8771<T> = T extends (infer U)[]
  ? DeepReadonlyArray8771<U>
  : T extends object
  ? DeepReadonlyObject8771<T>
  : T;

interface DeepReadonlyArray8771<T> extends ReadonlyArray<DeepReadonly8771<T>> {}

type DeepReadonlyObject8771<T> = {
  readonly [P in keyof T]: DeepReadonly8771<T[P]>;
};

type UnionToIntersection8771<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8771<T> = UnionToIntersection8771<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8771<T extends unknown[], V> = [...T, V];

type TuplifyUnion8771<T, L = LastOf8771<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8771<TuplifyUnion8771<Exclude<T, L>>, L>;

type DeepPartial8771<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8771<T[P]> }
  : T;

type Paths8771<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8771<K, Paths8771<T[K], Prev8771[D]>> : never }[keyof T]
  : never;

type Prev8771 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8771<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8771 {
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

type ConfigPaths8771 = Paths8771<NestedConfig8771>;

interface HeavyProps8771 {
  config: DeepPartial8771<NestedConfig8771>;
  path?: ConfigPaths8771;
}

const HeavyComponent8771 = memo(function HeavyComponent8771({ config }: HeavyProps8771) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8771) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8771 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8771: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8771.displayName = 'HeavyComponent8771';
export default HeavyComponent8771;
