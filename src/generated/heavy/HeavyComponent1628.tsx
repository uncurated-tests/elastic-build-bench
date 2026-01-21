'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1628<T> = T extends (infer U)[]
  ? DeepReadonlyArray1628<U>
  : T extends object
  ? DeepReadonlyObject1628<T>
  : T;

interface DeepReadonlyArray1628<T> extends ReadonlyArray<DeepReadonly1628<T>> {}

type DeepReadonlyObject1628<T> = {
  readonly [P in keyof T]: DeepReadonly1628<T[P]>;
};

type UnionToIntersection1628<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1628<T> = UnionToIntersection1628<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1628<T extends unknown[], V> = [...T, V];

type TuplifyUnion1628<T, L = LastOf1628<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1628<TuplifyUnion1628<Exclude<T, L>>, L>;

type DeepPartial1628<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1628<T[P]> }
  : T;

type Paths1628<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1628<K, Paths1628<T[K], Prev1628[D]>> : never }[keyof T]
  : never;

type Prev1628 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1628<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1628 {
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

type ConfigPaths1628 = Paths1628<NestedConfig1628>;

interface HeavyProps1628 {
  config: DeepPartial1628<NestedConfig1628>;
  path?: ConfigPaths1628;
}

const HeavyComponent1628 = memo(function HeavyComponent1628({ config }: HeavyProps1628) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1628) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1628 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1628: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1628.displayName = 'HeavyComponent1628';
export default HeavyComponent1628;
