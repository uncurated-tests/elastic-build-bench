'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8156<T> = T extends (infer U)[]
  ? DeepReadonlyArray8156<U>
  : T extends object
  ? DeepReadonlyObject8156<T>
  : T;

interface DeepReadonlyArray8156<T> extends ReadonlyArray<DeepReadonly8156<T>> {}

type DeepReadonlyObject8156<T> = {
  readonly [P in keyof T]: DeepReadonly8156<T[P]>;
};

type UnionToIntersection8156<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8156<T> = UnionToIntersection8156<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8156<T extends unknown[], V> = [...T, V];

type TuplifyUnion8156<T, L = LastOf8156<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8156<TuplifyUnion8156<Exclude<T, L>>, L>;

type DeepPartial8156<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8156<T[P]> }
  : T;

type Paths8156<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8156<K, Paths8156<T[K], Prev8156[D]>> : never }[keyof T]
  : never;

type Prev8156 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8156<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8156 {
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

type ConfigPaths8156 = Paths8156<NestedConfig8156>;

interface HeavyProps8156 {
  config: DeepPartial8156<NestedConfig8156>;
  path?: ConfigPaths8156;
}

const HeavyComponent8156 = memo(function HeavyComponent8156({ config }: HeavyProps8156) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8156) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8156 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8156: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8156.displayName = 'HeavyComponent8156';
export default HeavyComponent8156;
