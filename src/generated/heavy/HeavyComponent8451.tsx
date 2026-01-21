'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8451<T> = T extends (infer U)[]
  ? DeepReadonlyArray8451<U>
  : T extends object
  ? DeepReadonlyObject8451<T>
  : T;

interface DeepReadonlyArray8451<T> extends ReadonlyArray<DeepReadonly8451<T>> {}

type DeepReadonlyObject8451<T> = {
  readonly [P in keyof T]: DeepReadonly8451<T[P]>;
};

type UnionToIntersection8451<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8451<T> = UnionToIntersection8451<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8451<T extends unknown[], V> = [...T, V];

type TuplifyUnion8451<T, L = LastOf8451<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8451<TuplifyUnion8451<Exclude<T, L>>, L>;

type DeepPartial8451<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8451<T[P]> }
  : T;

type Paths8451<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8451<K, Paths8451<T[K], Prev8451[D]>> : never }[keyof T]
  : never;

type Prev8451 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8451<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8451 {
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

type ConfigPaths8451 = Paths8451<NestedConfig8451>;

interface HeavyProps8451 {
  config: DeepPartial8451<NestedConfig8451>;
  path?: ConfigPaths8451;
}

const HeavyComponent8451 = memo(function HeavyComponent8451({ config }: HeavyProps8451) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8451) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8451 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8451: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8451.displayName = 'HeavyComponent8451';
export default HeavyComponent8451;
