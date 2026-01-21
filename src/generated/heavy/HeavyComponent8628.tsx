'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8628<T> = T extends (infer U)[]
  ? DeepReadonlyArray8628<U>
  : T extends object
  ? DeepReadonlyObject8628<T>
  : T;

interface DeepReadonlyArray8628<T> extends ReadonlyArray<DeepReadonly8628<T>> {}

type DeepReadonlyObject8628<T> = {
  readonly [P in keyof T]: DeepReadonly8628<T[P]>;
};

type UnionToIntersection8628<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8628<T> = UnionToIntersection8628<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8628<T extends unknown[], V> = [...T, V];

type TuplifyUnion8628<T, L = LastOf8628<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8628<TuplifyUnion8628<Exclude<T, L>>, L>;

type DeepPartial8628<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8628<T[P]> }
  : T;

type Paths8628<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8628<K, Paths8628<T[K], Prev8628[D]>> : never }[keyof T]
  : never;

type Prev8628 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8628<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8628 {
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

type ConfigPaths8628 = Paths8628<NestedConfig8628>;

interface HeavyProps8628 {
  config: DeepPartial8628<NestedConfig8628>;
  path?: ConfigPaths8628;
}

const HeavyComponent8628 = memo(function HeavyComponent8628({ config }: HeavyProps8628) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8628) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8628 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8628: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8628.displayName = 'HeavyComponent8628';
export default HeavyComponent8628;
