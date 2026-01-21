'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1136<T> = T extends (infer U)[]
  ? DeepReadonlyArray1136<U>
  : T extends object
  ? DeepReadonlyObject1136<T>
  : T;

interface DeepReadonlyArray1136<T> extends ReadonlyArray<DeepReadonly1136<T>> {}

type DeepReadonlyObject1136<T> = {
  readonly [P in keyof T]: DeepReadonly1136<T[P]>;
};

type UnionToIntersection1136<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1136<T> = UnionToIntersection1136<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1136<T extends unknown[], V> = [...T, V];

type TuplifyUnion1136<T, L = LastOf1136<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1136<TuplifyUnion1136<Exclude<T, L>>, L>;

type DeepPartial1136<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1136<T[P]> }
  : T;

type Paths1136<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1136<K, Paths1136<T[K], Prev1136[D]>> : never }[keyof T]
  : never;

type Prev1136 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1136<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1136 {
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

type ConfigPaths1136 = Paths1136<NestedConfig1136>;

interface HeavyProps1136 {
  config: DeepPartial1136<NestedConfig1136>;
  path?: ConfigPaths1136;
}

const HeavyComponent1136 = memo(function HeavyComponent1136({ config }: HeavyProps1136) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1136) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1136 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1136: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1136.displayName = 'HeavyComponent1136';
export default HeavyComponent1136;
