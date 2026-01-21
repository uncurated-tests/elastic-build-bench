'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6628<T> = T extends (infer U)[]
  ? DeepReadonlyArray6628<U>
  : T extends object
  ? DeepReadonlyObject6628<T>
  : T;

interface DeepReadonlyArray6628<T> extends ReadonlyArray<DeepReadonly6628<T>> {}

type DeepReadonlyObject6628<T> = {
  readonly [P in keyof T]: DeepReadonly6628<T[P]>;
};

type UnionToIntersection6628<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6628<T> = UnionToIntersection6628<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6628<T extends unknown[], V> = [...T, V];

type TuplifyUnion6628<T, L = LastOf6628<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6628<TuplifyUnion6628<Exclude<T, L>>, L>;

type DeepPartial6628<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6628<T[P]> }
  : T;

type Paths6628<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6628<K, Paths6628<T[K], Prev6628[D]>> : never }[keyof T]
  : never;

type Prev6628 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6628<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6628 {
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

type ConfigPaths6628 = Paths6628<NestedConfig6628>;

interface HeavyProps6628 {
  config: DeepPartial6628<NestedConfig6628>;
  path?: ConfigPaths6628;
}

const HeavyComponent6628 = memo(function HeavyComponent6628({ config }: HeavyProps6628) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6628) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6628 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6628: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6628.displayName = 'HeavyComponent6628';
export default HeavyComponent6628;
