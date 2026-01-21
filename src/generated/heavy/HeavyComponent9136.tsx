'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9136<T> = T extends (infer U)[]
  ? DeepReadonlyArray9136<U>
  : T extends object
  ? DeepReadonlyObject9136<T>
  : T;

interface DeepReadonlyArray9136<T> extends ReadonlyArray<DeepReadonly9136<T>> {}

type DeepReadonlyObject9136<T> = {
  readonly [P in keyof T]: DeepReadonly9136<T[P]>;
};

type UnionToIntersection9136<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9136<T> = UnionToIntersection9136<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9136<T extends unknown[], V> = [...T, V];

type TuplifyUnion9136<T, L = LastOf9136<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9136<TuplifyUnion9136<Exclude<T, L>>, L>;

type DeepPartial9136<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9136<T[P]> }
  : T;

type Paths9136<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9136<K, Paths9136<T[K], Prev9136[D]>> : never }[keyof T]
  : never;

type Prev9136 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9136<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9136 {
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

type ConfigPaths9136 = Paths9136<NestedConfig9136>;

interface HeavyProps9136 {
  config: DeepPartial9136<NestedConfig9136>;
  path?: ConfigPaths9136;
}

const HeavyComponent9136 = memo(function HeavyComponent9136({ config }: HeavyProps9136) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9136) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9136 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9136: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9136.displayName = 'HeavyComponent9136';
export default HeavyComponent9136;
