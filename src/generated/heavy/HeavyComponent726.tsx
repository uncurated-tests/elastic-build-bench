'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly726<T> = T extends (infer U)[]
  ? DeepReadonlyArray726<U>
  : T extends object
  ? DeepReadonlyObject726<T>
  : T;

interface DeepReadonlyArray726<T> extends ReadonlyArray<DeepReadonly726<T>> {}

type DeepReadonlyObject726<T> = {
  readonly [P in keyof T]: DeepReadonly726<T[P]>;
};

type UnionToIntersection726<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf726<T> = UnionToIntersection726<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push726<T extends unknown[], V> = [...T, V];

type TuplifyUnion726<T, L = LastOf726<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push726<TuplifyUnion726<Exclude<T, L>>, L>;

type DeepPartial726<T> = T extends object
  ? { [P in keyof T]?: DeepPartial726<T[P]> }
  : T;

type Paths726<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join726<K, Paths726<T[K], Prev726[D]>> : never }[keyof T]
  : never;

type Prev726 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join726<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig726 {
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

type ConfigPaths726 = Paths726<NestedConfig726>;

interface HeavyProps726 {
  config: DeepPartial726<NestedConfig726>;
  path?: ConfigPaths726;
}

const HeavyComponent726 = memo(function HeavyComponent726({ config }: HeavyProps726) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 726) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-726 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H726: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent726.displayName = 'HeavyComponent726';
export default HeavyComponent726;
